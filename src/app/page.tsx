// src/app/page.tsx
import { fetchTrendingMovies } from "@/lib/tmdb";

export default async function Home() {
  const data = await fetchTrendingMovies();
  const movies = data.results;

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Trending Movies</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {movies.map((movie: any) => (
          <div key={movie.id} className="bg-gray-800 text-white p-2 rounded">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-auto rounded"
            />
            <h2 className="text-sm mt-2">{movie.title}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
