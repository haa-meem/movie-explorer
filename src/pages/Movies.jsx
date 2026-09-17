import { useState } from "react";
import { useLoaderData } from "react-router";
import MovieCard from "../components/MovieCard";

export default function Movies() {
  const shows = useLoaderData();
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = async () => {
    if (!search.trim()) {
      setSearchResults([]);
      setSearched(false);
      return;
    }

    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${search}`);

    const data = await res.json();
    setSearchResults(data);
    setSearched(true);
  };

  const handleClear = () => {
    setSearch("");
    setSearchResults([]);
    setSearched(false);
  };

  const movies = searched ? searchResults.map((result) => result.show) : shows;

  return (
    <div className="p-4 md:p-6">
      <div className="flex gap-2 mb-6 max-w-xl mx-auto">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search movies..."
          className="input input-bordered w-full"
        />

        <button onClick={handleSearch} className="btn btn-outline">
          Search
        </button>

        {search && (
          <button onClick={handleClear} className="btn btn-outline">
            Clear
          </button>
        )}
      </div>

      {searched && movies.length === 0 ? (
        <p className="text-center text-lg py-10">No movies found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {movies.map((show) => (
            <MovieCard key={show.id} show={show} onDetails={setSelectedMovie} />
          ))}
        </div>
      )}

      {selectedMovie && (
        <div
          className="modal modal-open"
          onClick={() => setSelectedMovie(null)}
        >
          <div
            className="modal-box max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMovie(null)}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={selectedMovie.image?.original}
                alt={selectedMovie.name}
                className="w-full md:w-64 rounded-lg"
              />

              <div>
                <h2 className="text-3xl font-bold mb-4">
                  {selectedMovie.name}
                </h2>

                <p className="mb-2">
                  ⭐ Rating: {selectedMovie.rating?.average || "N/A"}
                </p>

                <p className="mb-2">
                  📅 Release: {selectedMovie.premiered || "N/A"}
                </p>

                <p className="mb-2">
                  🎭 Genres: {selectedMovie.genres?.join(", ") || "N/A"}
                </p>

                <p className="mb-4">Status: {selectedMovie.status || "N/A"}</p>

                <div
                  dangerouslySetInnerHTML={{
                    __html: selectedMovie.summary || "No summary available.",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
