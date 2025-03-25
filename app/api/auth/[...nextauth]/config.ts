import {NextAuthOptions} from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import {PrismaAdapter} from "@next-auth/prisma-adapter";
import {prisma} from "@/lib/prisma";


export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    adapter: PrismaAdapter(prisma),

    session: {
        strategy: 'database', // Use JWT for better performance
    },
    callbacks: {
        async session({ session, user }) {
            if (session.user) {
                session.user.id = user.id;
                session.user.role=user.role;

            }
            return session;
        },
        async signIn(data){
            const isAdmin = data.user.email === "natasyo23@gmail.com";
            if(isAdmin){
                await prisma.user.update({
                    where: {email: data.user.email as string },
                    data: {role:"ADMIN"}  ,
                });
            }

            return true;
        },
      async redirect({url, baseUrl}){
          console.log(url, baseUrl)
          return url.startsWith(baseUrl)?url:baseUrl;
      }
    },
    secret: process.env.NEXTAUTH_SECRET, // Use a strong secret key
};