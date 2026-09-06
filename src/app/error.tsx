"use client";

import { useEffect } from "react";
import Container from "@/components/Container";

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
    <div className="py-16 md:py-24 flex items-center justify-center bg-bg-page text-text-main">
      <Container narrow="narrow" className="text-center space-y-6">
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
      </Container>
    </div>
  );
}
