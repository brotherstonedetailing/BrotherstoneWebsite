"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BOOKING_URL, QUOTE_FORM_URL } from "@/app/lib/constants";

export default function QuoteForm() {
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isActive) {
      return;
    }

    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isActive]);

  return (
    <section id="quote" className="bg-[var(--background2)] py-20 scroll-mt-28">
      <div className="squeezetainer max-w-4xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">
            Get Started
          </p>
          <h2 className="text-3xl font-bold text-[var(--text)] lg:text-4xl">
            Ready For A Clean Car?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--secondary)]">
            Submit this short form for a personalized quote. We&apos;ll get back
            to you as soon as possible.
          </p>
        </div>

        <div ref={containerRef} className="relative">
          {!isActive && (
            <button
              type="button"
              onClick={() => setIsActive(true)}
              className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center bg-black/5 transition hover:bg-black/10"
              aria-label="Click to fill out quote form"
            >
              <span className="rounded-lg border border-[var(--border)] bg-white px-5 py-3 text-sm font-medium text-[var(--text)] shadow-md">
                Click to fill out form
              </span>
            </button>
          )}

          {isActive && (
            <button
              type="button"
              onClick={() => setIsActive(false)}
              className="absolute right-3 top-3 z-10 rounded-md border border-[var(--border)] bg-white px-3 py-1.5 text-xs font-medium text-[var(--secondary)] shadow-sm transition hover:bg-[var(--background)]"
            >
              Done
            </button>
          )}

          <iframe
            src={QUOTE_FORM_URL}
            title="Request a quote"
            className={`block w-full border-0 bg-transparent ${
              isActive ? "pointer-events-auto" : "pointer-events-none"
            }`}
            style={{ height: "1200px" }}
          />
        </div>

        <p className="mt-6 text-center text-sm text-[var(--secondary)]">
          Prefer to book directly?{" "}
          <Link
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--primary)] underline"
          >
            Book online with Urable
          </Link>
        </p>
      </div>
    </section>
  );
}
