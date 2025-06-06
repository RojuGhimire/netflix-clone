// app/profile/page.tsx
'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status]);

  if (status === 'loading') return <div>Loading...</div>;

  return <div className="text-white p-4">Hello, {session?.user?.name}!</div>;
}
