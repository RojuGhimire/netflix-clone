// src/lib/tmdb.ts

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchTrendingMovies() {
  const res = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  if (!res.ok) {
    throw new Error('Failed to fetch trending movies');
  }
  return res.json();
}
export async function fetchMovieDetails(id: string) {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  if (!res.ok) {
    throw new Error('Failed to fetch movie details');
  }
  return res.json();
}
export async function fetchSearchResults(query: string) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&api_key=${process.env.TMDB_API_KEY}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch search results");
    }

    return res.json();
  } catch (error) {
    console.error("Search error:", error);
    return { results: [] };
  }
}
