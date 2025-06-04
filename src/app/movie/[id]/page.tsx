import { fetchMovieDetails } from "@/lib/tmdb";
import Image from "next/image";

export default async function MoviePage({ params }: { params: { id: string } }) {
  const movie = await fetchMovieDetails(params.id);
   const movieId = params.id;

  return (
    <main className="p-6 text-white">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={500}
            height={750}
            className="rounded"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <p className="mb-4 text-gray-300">{movie.overview}</p>
          <p className="mb-1">
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Rating:</strong> ⭐ {movie.vote_average} / 10
          </p>
        </div>
      </div>
    </main>
  );
}
