// components/AuthButton.tsx
'use client';

import { useSession, signIn, signOut } from "next-auth/react";

export function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex items-center gap-4">
        <p className="text-white">Hi, {session.user?.name}</p>
        <button
          className="bg-red-600 px-4 py-2 rounded text-white"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button
      className="bg-blue-600 px-4 py-2 rounded text-white"
      onClick={() => signIn("google")}
    >
      Sign In with Google
    </button>
  );
}
