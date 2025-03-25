'use client';
import Btn from '@/react/components/buttons/btn';
import BtnPrimary from '@/react/components/buttons/btn-primary';
import { signIn, signOut, useSession } from 'next-auth/react';
import { FunctionComponent } from 'react';
// import { useSearchParams } from 'next/navigation';

const Auth: FunctionComponent = () => {
  const { data: session } = useSession();
  // const searchParams = useSearchParams();
  // const callbackUrl = searchParams.get("callbackUrl") || "/";

  return session ? (
    <div className="container">
      <p>Welcome, {session.user?.name}!</p>
      <BtnPrimary onClick={() => signOut({ redirect: false })}>Sign out</BtnPrimary>
    </div>
  ) : (
    <div className="container h-full content-center text-center">
      <p className="text-xl font-bold text-eatly-black-100"> Sign in with Google</p>
      <Btn onClick={() => signIn('google')}>
        <svg className="icon" height={20} width={20}>
          <use xlinkHref="img/sprite.svg#google"></use>
        </svg>
      </Btn>
    </div>
  );
};
export default Auth;
