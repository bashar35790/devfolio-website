export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-bg-page z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-text-muted text-sm font-medium">Loading...</p>
      </div>
    </div>
  );
}
