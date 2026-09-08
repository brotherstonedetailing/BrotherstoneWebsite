"use client";

import { useCallback, useEffect, useState } from "react";
import BlurImage from "@/app/components/blur-image";

export type GalleryGroup = {
  label: string;
  badgeClass: string;
  images: string[];
};

type JobGalleryProps = {
  groups: GalleryGroup[];
  altSuffix: string;
};

export default function JobGallery({ groups, altSuffix }: JobGalleryProps) {
  const flat: { src: string; label: string }[] = [];
  const indexedGroups = groups.map((group) => {
    const startIndex = flat.length;
    group.images.forEach((src) => flat.push({ src, label: group.label }));
    return { ...group, startIndex };
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;
  const total = flat.length;

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((current) =>
        current === null ? current : (current + delta + total) % total,
      ),
    [total],
  );

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, close, step]);

  const active = openIndex === null ? null : flat[openIndex];

  return (
    <>
      <div className="grid grid-cols-1 gap-5 overflow-y-auto sm:grid-cols-2 lg:min-h-0 lg:flex-1">
        {indexedGroups.map((group) => (
          <div key={group.label} className="flex flex-col gap-5">
            {group.images.map((src, index) => (
              <figure
                key={src}
                role="button"
                tabIndex={0}
                aria-label={`Expand ${group.label.toLowerCase()} photo`}
                onClick={() => setOpenIndex(group.startIndex + index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setOpenIndex(group.startIndex + index);
                  }
                }}
                className="relative aspect-[4/3] cursor-zoom-in overflow-hidden rounded-2xl border border-[var(--border)] shadow-sm transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2"
              >
                <BlurImage
                  src={src}
                  alt={`${group.label} ${altSuffix}`}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                />
                {index === 0 && (
                  <figcaption
                    className={`pointer-events-none absolute left-3 top-3 rounded-md px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white ${group.badgeClass}`}
                  >
                    {group.label}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${active.label} photo, ${(openIndex ?? 0) + 1} of ${total}`}
          onClick={close}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl leading-none text-white transition hover:bg-white/25"
          >
            ×
          </button>

          {total > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous photo"
                onClick={(event) => {
                  event.stopPropagation();
                  step(-1);
                }}
                className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-3xl leading-none text-white transition hover:bg-white/25 sm:left-4"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Next photo"
                onClick={(event) => {
                  event.stopPropagation();
                  step(1);
                }}
                className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-3xl leading-none text-white transition hover:bg-white/25 sm:right-4"
              >
                ›
              </button>
            </>
          )}

          <div
            className="relative h-full w-full"
            onClick={(event) => event.stopPropagation()}
          >
            <BlurImage
              key={active.src}
              src={active.src}
              alt={`${active.label} ${altSuffix}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <p className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
            {active.label} · {(openIndex ?? 0) + 1} / {total}
          </p>
        </div>
      )}
    </>
  );
}
