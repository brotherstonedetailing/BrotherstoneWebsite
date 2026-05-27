"use client";

import Image from "next/image";
import Link from "next/link";
import PricingSection from "@/app/components/pricing-section";
import QuoteForm from "@/app/components/quote-form";
import TypewriterLocations from "@/app/components/typewriter-locations";
import { BOOKING_URL, PHONE_HREF, SERVICE_AREAS } from "@/app/lib/constants";

export default function Home() {
  return (
    <>
      <section id="hero" className="relative min-h-screen">
        <Image
          src="/hero.jpg"
          fill
          className="object-cover object-[center_65%]"
          alt="Professional mobile car detailing"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

        <div className="relative flex min-h-screen items-center justify-center text-center">
          <div className="squeezetainer w-full">
            <div className="mx-auto max-w-4xl">
              <h1 className="whitespace-nowrap text-2xl font-bold uppercase leading-tight tracking-wide text-white sm:text-4xl lg:text-5xl">
                Brotherstone Detailing
              </h1>
              <h2 className="mt-4 text-xl font-semibold leading-tight text-white sm:text-2xl lg:text-3xl">
                Mobile detailing in{" "}
                <TypewriterLocations areas={SERVICE_AREAS} />
              </h2>

              <div className="mt-12 flex flex-wrap items-stretch justify-center gap-3">
                <Link
                  href="#quote"
                  className="inline-flex min-w-[11.5rem] items-center justify-center rounded-md bg-[var(--primary)] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[var(--accent-light)]"
                >
                  Start Your Quote
                </Link>
                <Link
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-w-[11.5rem] items-center justify-center rounded-md border-2 border-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white hover:text-[var(--text)]"
                >
                  Book Online
                </Link>
                <Link
                  href={PHONE_HREF}
                  className="inline-flex min-w-[11.5rem] items-center justify-center rounded-md border-2 border-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white hover:text-[var(--text)]"
                >
                  Call Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-28 bg-[var(--background)] py-20 text-[var(--text)]"
      >
        <div className="squeezetainer grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">
                Who Are We
              </span>
              <h2 className="mt-2 text-3xl font-bold lg:text-4xl">Why Choose Us</h2>
            </div>

            <p className="text-lg leading-relaxed text-[var(--secondary)]">
              We&apos;re a locally owned mobile detailing company proudly serving
              Katy, Texas. Run by two brothers with a passion for clean cars and
              quality work, we bring professional detailing straight to your
              driveway. Our focus is simple: reliable service, honest pricing,
              and results that make your vehicle shine.
            </p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/aboutUs.jpg"
              fill
              className="object-cover"
              alt="Brotherstone detailing team at work"
            />
          </div>
        </div>
      </section>

      <PricingSection />

      <section
        id="testimonials"
        className="bg-[var(--background)] py-20 scroll-mt-28"
      >
        <div className="squeezetainer">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[var(--text)] lg:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-3 text-[var(--secondary)]">
              Real feedback from our happy customers in Katy, Texas.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                quote:
                  "Brotherstone did an amazing job on my car! The attention to detail was outstanding, and my car looks brand new.",
                name: "Jason M.",
              },
              {
                quote:
                  "Fast, reliable, and professional. I highly recommend Brotherstone for anyone who wants their car looking perfect.",
                name: "Sarah L.",
              },
              {
                quote:
                  "The team was punctual, friendly, and my car has never looked better. Excellent service!",
                name: "Mike R.",
              },
            ].map((testimonial) => (
              <article
                key={testimonial.name}
                className="flex flex-col rounded-2xl border border-[var(--border)] bg-white p-8 shadow-sm"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-4 w-4 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="flex-1 text-[var(--secondary)]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <span className="font-semibold text-[var(--primary)]">
                    – {testimonial.name}
                  </span>
                  <p className="text-sm text-[var(--secondary)]">Katy, TX</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <QuoteForm />
    </>
  );
}
