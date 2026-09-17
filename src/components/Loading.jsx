export default function Loading() {
  return (
    <div className="min-h-[calc(100vh-112px)] flex items-center justify-center">
      <div className="text-center">
        <span className="loading loading-spinner loading-lg"></span>

        <p className="mt-4 text-lg font-medium">Loading movies...</p>
      </div>
    </div>
  );
}
