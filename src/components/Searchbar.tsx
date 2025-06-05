'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?q=${query}`);
  };

  return (
    <form onSubmit={handleSearch} className="mb-6 flex gap-2">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow p-2 rounded bg-gray-800 text-white placeholder-gray-400"
      />
      <button
        type="submit"
        className="bg-red-600 px-4 py-2 rounded text-white hover:bg-red-700"
      >
        Search
      </button>
    </form>
  );
}
