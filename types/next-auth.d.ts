import  'next-auth';
import { Role } from '@/types/ui-types';

declare module 'next-auth' {

  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
role:Role;
    };
  }
  interface User {
    id: string;
    role: Role; // Add role to user
  }

}
