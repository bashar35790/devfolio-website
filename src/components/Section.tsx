import React from "react";
import Container from "./Container";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  /** Background variant: page and muted alternate for rhythm */
  variant?: "page" | "muted";
  /** Set false when the section renders its own full-bleed rows (e.g. tickers).
   *  In that case, wrap aligned blocks manually with <Container>. */
  contained?: boolean;
};

/**
 * Single source of truth for vertical rhythm site-wide.
 * Every section uses py-16 md:py-24 and aligns inner content via <Container>.
 * Full-bleed backgrounds stay edge-to-edge; only inner content aligns.
 */
const Section = ({
  id,
  children,
  className = "",
  containerClassName = "",
  variant = "page",
  contained = true,
}: SectionProps) => {
  const bg = variant === "muted" ? "bg-bg-section" : "bg-bg-page";

  return (
    <section
      id={id}
      className={`relative overflow-x-clip py-16 md:py-24 ${bg} ${className}`}
    >
      {contained ? (
        <Container className={`relative z-10 ${containerClassName}`}>
          {children}
        </Container>
      ) : (
        children
      )}
    </section>
  );
};

export default Section;
