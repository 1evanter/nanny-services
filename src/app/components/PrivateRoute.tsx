'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "@/app/firebase/config"

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/sign-in');
    }
  }, [ user, router]);

  if (!user) {
    return null;
  }

  return <>{children}</>;
};