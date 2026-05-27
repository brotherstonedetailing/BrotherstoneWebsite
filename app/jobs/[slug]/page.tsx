import BlurImage from "@/app/components/blur-image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CLIENT_JOBS, getClientJob } from "@/app/lib/jobs";

type JobPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return CLIENT_JOBS.map((job) => ({ slug: job.slug }));
}

export default async function JobPage({ params }: JobPageProps) {
  const { slug } = await params;
  const job = getClientJob(slug);

  if (!job) {
    notFound();
  }

  return (
    <div className="flex min-h-dvh flex-col lg:h-full lg:min-h-0">
      <header className="shrink-0 border-b border-[var(--border)] px-5 py-4 sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link
            href="/#testimonials"
            className="text-sm font-semibold uppercase tracking-wide text-[var(--primary)] transition hover:text-[var(--secondary)]"
          >
            ← Back to Reviews
          </Link>
          <p className="text-sm text-[var(--secondary)]">{job.clientName}</p>
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-6 px-5 py-6 sm:px-8 sm:py-8 lg:min-h-0 lg:overflow-hidden">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 lg:min-h-0 lg:flex-1 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(18rem,20rem)] lg:gap-10">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:min-h-0 lg:flex-1">
            <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--border)] shadow-sm lg:aspect-auto lg:h-full lg:min-h-0">
              <BlurImage
                src={job.interiorImage}
                alt={`Interior ${job.serviceType} for ${job.clientName}`}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
              />
              <figcaption className="absolute left-3 top-3 rounded-md bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                Interior
              </figcaption>
            </figure>

            <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--border)] shadow-sm lg:aspect-auto lg:h-full lg:min-h-0">
              <BlurImage
                src={job.exteriorImage}
                alt={`Exterior ${job.serviceType} for ${job.clientName}`}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
              />
              <figcaption className="absolute left-3 top-3 rounded-md bg-[var(--primary)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                Exterior
              </figcaption>
            </figure>
          </div>

          <div className="flex w-full flex-col rounded-2xl border border-[var(--border)] bg-white p-5 shadow-sm lg:min-h-0 lg:justify-self-end lg:overflow-hidden lg:p-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)]">
              Job Details
            </span>
            <h1 className="mt-2 text-xl font-bold text-[var(--text)] sm:text-2xl">
              {job.serviceType}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-[var(--secondary)]">
              {job.description}
            </p>

            <dl className="mt-5 grid grid-cols-1 gap-3 text-sm">
              <div>
                <dt className="font-semibold text-[var(--text)]">Vehicle</dt>
                <dd className="mt-1 text-[var(--secondary)]">{job.vehicle}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--text)]">Location</dt>
                <dd className="mt-1 text-[var(--secondary)]">{job.location}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--text)]">Duration</dt>
                <dd className="mt-1 text-[var(--secondary)]">{job.duration}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--text)]">Client</dt>
                <dd className="mt-1 text-[var(--secondary)]">{job.clientName}</dd>
              </div>
            </dl>

            <ul className="mt-5 space-y-2 pb-2 text-sm text-[var(--secondary)] lg:overflow-hidden">
              {job.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
