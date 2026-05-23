"use client";

import { useEffect, useMemo, useState } from "react";

type TypewriterLocationsProps = {
  areas: readonly string[];
  suffix?: string;
};

export default function TypewriterLocations({
  areas,
  suffix = ", TX",
}: TypewriterLocationsProps) {
  const locations = useMemo(
    () => areas.map((area) => `${area}${suffix}`),
    [areas, suffix],
  );

  const longestLocation = useMemo(
    () =>
      locations.reduce(
        (longest, location) =>
          location.length > longest.length ? location : longest,
        "",
      ),
    [locations],
  );

  const [locationIndex, setLocationIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentLocation = locations[locationIndex];
    const isComplete = displayText === currentLocation;
    const isEmpty = displayText === "";

    let delay = isDeleting ? 40 : 80;

    if (!isDeleting && isComplete) {
      delay = 2000;
    } else if (isDeleting && isEmpty) {
      delay = 400;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting && isComplete) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        if (isEmpty) {
          setIsDeleting(false);
          setLocationIndex((prev) => (prev + 1) % locations.length);
          return;
        }

        setDisplayText((prev) => prev.slice(0, -1));
        return;
      }

      setDisplayText(currentLocation.slice(0, displayText.length + 1));
    }, delay);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, locationIndex, locations]);

  return (
    <span className="relative inline-block align-baseline" aria-live="polite">
      <span className="invisible whitespace-nowrap">{longestLocation}</span>
      <span className="absolute left-0 top-0 whitespace-nowrap text-[var(--accent-light)]">
        {displayText}
        <span className="animate-pulse">|</span>
      </span>
    </span>
  );
}
