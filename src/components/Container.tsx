import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  narrow?: "default" | "reading" | "narrow";
};

/**
 * Single source of truth for horizontal alignment site-wide.
 * All navbar, section, page and footer content must align to this.
 * - default: max-w-7xl (1280px) — navbar + every section/page
 * - reading: max-w-4xl — article body only, always nested INSIDE default
 * - narrow: max-w-3xl — FAQ / intro copy only, always nested INSIDE default
 */
const Container = ({ children, className, narrow = "default" }: ContainerProps) => {
  const maxWidth =
    narrow === "reading"
      ? "max-w-4xl"
      : narrow === "narrow"
        ? "max-w-3xl"
        : "max-w-7xl";

  return (
    <div className={`mx-auto w-full ${maxWidth} px-4 sm:px-6 lg:px-8 ${className ?? ""}`}>
      {children}
    </div>
  );
};

export default Container;
