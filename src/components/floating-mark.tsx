import { useEffect, useState } from "react";

import { Mark } from "@/components/mark";

/** Desktop only: the mark slides in at top left once the masthead has scrolled away. */
export const FloatingMark = () => {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    // The masthead row: wordmark plus the big mark beside it.
    const masthead = document.querySelector("#masthead")?.parentElement;
    if (!masthead) {
      return;
    }
    // Show only once the row has scrolled off the top, never while any of it is on screen.
    const observer = new IntersectionObserver(([entry]) =>
      setShown(
        entry !== undefined &&
          !entry.isIntersecting &&
          entry.boundingClientRect.bottom <= 0
      )
    );
    observer.observe(masthead);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden="true"
      className="left-gutter pointer-events-none fixed top-4 z-50 hidden transition duration-300 data-hidden:-translate-y-2 data-hidden:opacity-0 motion-reduce:transition-none md:block"
      data-hidden={shown ? undefined : ""}
    >
      <Mark className="size-26" />
    </div>
  );
};
