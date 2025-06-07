'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function AuthButtons() {
  const { data: session } = useSession();

  return session ? (
    <div className="text-white flex gap-4">
      <p>Hello, {session.user?.name}</p>
      <button onClick={() => signOut()} className="bg-red-600 px-4 py-2 rounded">Sign Out</button>
    </div>
  ) : (
    <button onClick={() => signIn("google")} className="bg-blue-600 px-4 py-2 rounded">Sign In with Google</button>
  );
}
