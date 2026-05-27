"use client";
import Link from "next/link";
import { BOOKING_URL, QUOTE_FORM_URL } from "@/app/lib/constants";

export default function QuoteForm() {
  function handleWheel(e: React.WheelEvent<HTMLDivElement>) {
    window.scrollBy({ top: e.deltaY, behavior: "instant" });
  }

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

        <div onWheel={handleWheel}>
          <iframe
            src={QUOTE_FORM_URL}
            title="Request a quote"
            className="block h-[1300px] w-full border-0 bg-transparent lg:h-[1200px]"
            scrolling="no"
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
