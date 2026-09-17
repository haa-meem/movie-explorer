export default function MovieCard({ show, onDetails }) {
  return (
    <div className="card bg-base-100 shadow-md">
      <figure>
        {show.image?.medium ? (
          <img src={show.image.medium} alt={show.name} className="w-full" />
        ) : (
          <div className="w-full h-80 flex items-center justify-center bg-neutral text-neutral-content">
            <span>No Image Available</span>
          </div>
        )}
      </figure>

      <div className="card-body">
        <h2 className="card-title">{show.name}</h2>

        <p>Release: {show.premiered || "N/A"}</p>

        <p>Rating: {show.rating?.average || "N/A"}</p>

        <div className="card-actions justify-end">
          <button
            onClick={() => onDetails(show)}
            className="btn btn-sm btn-outline"
          >
            See Details
          </button>
        </div>
      </div>
    </div>
  );
}
