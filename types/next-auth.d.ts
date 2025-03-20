import NextAuth from 'next-auth';

declare module 'next-auth' {

  enum Role{ USER,
    ADMIN
  }
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
role:"USER" | "ADMIN";
    };
  }
  interface User {
    id: string;
    role: "USER" | "ADMIN"; // Add role to user
  }

}
