"use client";

import BlurImage from "@/app/components/blur-image";
import Link from "next/link";
import PricingSection from "@/app/components/pricing-section";
import QuoteForm from "@/app/components/quote-form";
import TypewriterLocations from "@/app/components/typewriter-locations";
import { BOOKING_URL, PHONE_HREF, SERVICE_AREAS } from "@/app/lib/constants";
import { CLIENT_JOBS } from "@/app/lib/jobs";

export default function Home() {
  return (
    <>
      <section id="hero" className="relative min-h-screen">
        <BlurImage
          src="/hero.jpg"
          fill
          className="object-cover object-[center_65%]"
          alt="Professional mobile car detailing"
          priority
          sizes="100vw"
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
            <BlurImage
              src="/aboutUs.jpg"
              fill
              className="object-cover"
              alt="Brotherstone detailing team at work"
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
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

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            {CLIENT_JOBS.map((job) => (
              <article
                key={job.slug}
                className="flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm"
              >
                <div className="relative aspect-[4/3]">
                  <BlurImage
                    src={job.thumbnailImage}
                    fill
                    className="object-cover"
                    alt={`${job.clientName}'s ${job.vehicle}`}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 384px"
                  />
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <h3 className="text-lg font-semibold text-[var(--text)]">
                    {job.clientName}
                  </h3>
                  <p className="mt-4 flex-1 text-[var(--secondary)]">
                    &ldquo;{job.quote}&rdquo;
                  </p>
                  <Link
                    href={`/jobs/${job.slug}`}
                    className="mt-6 rounded-lg bg-[var(--primary)] px-6 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[var(--accent-light)]"
                  >
                    See Job
                  </Link>
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
