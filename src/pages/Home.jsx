import { Link } from "react-router";

export default function Home() {
  return (
    <div
      className="hero min-h-[calc(100vh-112px)]"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1920&q=80)",
      }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content text-neutral-content text-center px-4">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-3xl sm:text-4xl md:text-6xl font-bold">
            Discover Your Next Favorite Movie
          </h1>

          <p className="mb-6 text-sm sm:text-base md:text-lg">
            Explore movies and TV shows, discover ratings, release information,
            and find something great to watch.
          </p>

          <Link
            to="/movies"
            className="btn btn-outline text-white hover:bg-white hover:text-black"
          >
            Explore Movies
          </Link>
        </div>
      </div>
    </div>
  );
}
