import { fetchSearchResults } from "@/lib/tmdb";

type SearchPageProps = {
  searchParams: {
    q: string;
  };
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q;

  if (!query) {
    return (
      <main className="p-6 text-white">
        <h1 className="text-2xl font-bold mb-4">Please enter a search query.</h1>
      </main>
    );
  }

  const results = await fetchSearchResults(query);

  return (
    <main className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-6">Search Results for "{query}"</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {results.results.length > 0 ? (
          results.results.map((movie: any) => (
            <div key={movie.id} className="bg-gray-800 p-2 rounded">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-auto rounded"
              />
              <h2 className="text-sm mt-2">{movie.title}</h2>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </main>
  );
}
