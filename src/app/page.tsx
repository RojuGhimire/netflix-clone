// src/app/page.tsx
import { fetchTrendingMovies } from "@/lib/tmdb";
import Link from "next/link";

export default async function Home() {
  const data = await fetchTrendingMovies();
  const movies = data.results;

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Trending Movies</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {movies.map((movie: any) => (
  <Link href={`/movie/${movie.id}`} key={movie.id}>
    <div className="bg-gray-800 text-white p-2 rounded hover:scale-105 transition">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-auto rounded"
      />
      <h2 className="text-sm mt-2">{movie.title}</h2>
    </div>
  </Link>
        ))}
      </div>
    </main>
  );
}
