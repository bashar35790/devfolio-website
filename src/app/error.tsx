"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-page text-text-main">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="w-20 h-20 mx-auto rounded-full bg-red-500/10 flex items-center justify-center">
          <span className="text-4xl">!</span>
        </div>
        <h1 className="text-3xl font-bold">Something went wrong</h1>
        <p className="text-text-muted">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="btn btn-primary px-8 py-3 cursor-pointer"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
