export default function Loading() {
  return (
    <div className="text-center text-white mt-10">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4" />
      <p>Searching for movies...</p>
    </div>
  );
}
