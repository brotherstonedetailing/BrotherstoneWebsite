"use client";

import { useEffect } from "react";

const DESKTOP_MEDIA_QUERY = "(min-width: 1024px)";

export default function BodyScrollLock() {
  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_MEDIA_QUERY);
    const previousOverflow = document.body.style.overflow;

    const syncScrollLock = () => {
      document.body.style.overflow = mediaQuery.matches ? "hidden" : "";
    };

    syncScrollLock();
    mediaQuery.addEventListener("change", syncScrollLock);

    return () => {
      mediaQuery.removeEventListener("change", syncScrollLock);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return null;
}
