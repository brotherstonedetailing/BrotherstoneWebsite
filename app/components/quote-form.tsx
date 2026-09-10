"use client";

import Link from "next/link";
import { useState } from "react";
import {
  PHONE_NUMBER,
  QUOTE_SERVICE_OPTIONS,
  QUOTE_UTILITY_OPTIONS,
  SERVICE_AREAS,
  SMS_HREF,
  VEHICLE_TIERS,
} from "@/app/lib/constants";

const EMPTY_FORM = {
  name: "",
  phone: "",
  email: "",
  vehicle: "",
  tier: VEHICLE_TIERS[0].label as string,
  services: [] as string[],
  city: SERVICE_AREAS[0] as string,
  zip: "",
  preferredDate: "",
  utilities: "",
  notes: "",
  company: "", // honeypot -- hidden from real visitors
};

type FormState = typeof EMPTY_FORM;
type Status = "idle" | "sending" | "sent" | "error";

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [servicesError, setServicesError] = useState(false);

  function update<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function toggleService(service: string) {
    setServicesError(false);
    setForm((current) => ({
      ...current,
      services: current.services.includes(service)
        ? current.services.filter((s) => s !== service)
        : [...current.services, service],
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // A checkbox group can't use the native `required` attribute the way the
    // other fields do, so this is checked by hand before anything is sent.
    if (form.services.length === 0) {
      setServicesError(true);
      return;
    }

    setStatus("sending");
    setError("");

    // The sheet has a single Service column and the Apps Script expects a
    // `service` string, so the picked services go over as one joined value.
    const { services, ...rest } = form;
    const payload = { ...rest, service: services.join(", ") };

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.ok) {
        setError(result.error ?? "Something went wrong sending that.");
        setStatus("error");
        return;
      }

      setForm(EMPTY_FORM);
      setStatus("sent");
    } catch {
      setError("Something went wrong sending that.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <section id="quote" className="bg-[var(--background2)] py-20 scroll-mt-28">
        <div className="squeezetainer max-w-2xl text-center">
          <div className="rounded-2xl border border-[var(--primary)] bg-white p-10 shadow-md">
            <h2 className="text-2xl font-bold text-[var(--text)] lg:text-3xl">
              Got it — thanks!
            </h2>
            <p className="mt-4 text-[var(--secondary)]">
              Your request is in. We&apos;ll text you back at the number you
              gave us, usually within a couple of hours.
            </p>
            <p className="mt-6 text-sm text-[var(--secondary)]">
              Need it sooner? Text us directly at{" "}
              <Link
                href={SMS_HREF}
                className="font-semibold text-[var(--primary)] underline"
              >
                {PHONE_NUMBER}
              </Link>
              .
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-8 text-sm font-medium text-[var(--primary)] underline"
            >
              Send another request
            </button>
          </div>
        </div>
      </section>
    );
  }

  const sending = status === "sending";

  return (
    <section id="quote" className="bg-[var(--background2)] py-20 scroll-mt-28">
      <div className="squeezetainer max-w-3xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[var(--primary)]">
            Get Started
          </p>
          <h2 className="text-3xl font-bold text-[var(--text)] lg:text-4xl">
            Ready For A Clean Car?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--secondary)]">
            Tell us about your vehicle and we&apos;ll text you a quote. Takes
            about a minute.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="relative rounded-2xl border border-[var(--border)] bg-white p-6 shadow-md lg:p-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Your name" htmlFor="name" required>
              <input
                id="name"
                name="name"
                className="form-input"
                autoComplete="name"
                required
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
              />
            </Field>

            <Field
              label="Phone"
              htmlFor="phone"
              required
              hint="We'll text your quote here."
            >
              <input
                id="phone"
                name="phone"
                type="tel"
                className="form-input"
                autoComplete="tel"
                required
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
              />
            </Field>

            <Field label="Email" htmlFor="email" hint="Optional.">
              <input
                id="email"
                name="email"
                type="email"
                className="form-input"
                autoComplete="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
              />
            </Field>

            <Field
              label="Vehicle"
              htmlFor="vehicle"
              required
              hint="Year, make and model."
            >
              <input
                id="vehicle"
                name="vehicle"
                className="form-input"
                placeholder="2019 Toyota 4Runner"
                required
                value={form.vehicle}
                onChange={(e) => update("vehicle", e.target.value)}
              />
            </Field>

            <Field label="Vehicle size" htmlFor="tier" required>
              <select
                id="tier"
                name="tier"
                className="form-input"
                required
                value={form.tier}
                onChange={(e) => update("tier", e.target.value)}
              >
                {VEHICLE_TIERS.map((option) => (
                  <option key={option.id} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="City" htmlFor="city" required>
              <select
                id="city"
                name="city"
                className="form-input"
                required
                value={form.city}
                onChange={(e) => update("city", e.target.value)}
              >
                {SERVICE_AREAS.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
                <option value="Other">Somewhere else nearby</option>
              </select>
            </Field>

            <Field label="ZIP code" htmlFor="zip" hint="Optional.">
              <input
                id="zip"
                name="zip"
                inputMode="numeric"
                className="form-input"
                autoComplete="postal-code"
                value={form.zip}
                onChange={(e) => update("zip", e.target.value)}
              />
            </Field>

            <Field
              label="Preferred date"
              htmlFor="preferredDate"
              hint="Optional — we'll confirm by text."
            >
              <input
                id="preferredDate"
                name="preferredDate"
                type="date"
                className="form-input"
                value={form.preferredDate}
                onChange={(e) => update("preferredDate", e.target.value)}
              />
            </Field>
          </div>

          <fieldset className="mt-6">
            <legend className="mb-1.5 block text-sm font-semibold text-[var(--text)]">
              What are you interested in?
              <span className="text-[var(--primary)]"> *</span>
            </legend>
            <p className="mb-2 text-xs text-[var(--secondary)]">
              Pick as many as you like — we&apos;ll quote them together.
            </p>
            <div
              className={`grid grid-cols-1 gap-3 rounded-xl border bg-[var(--background2)] px-5 py-4 sm:grid-cols-2 ${
                servicesError
                  ? "border-[var(--primary)]"
                  : "border-[var(--border)]"
              }`}
            >
              {QUOTE_SERVICE_OPTIONS.map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-2 text-sm text-[var(--text)]"
                >
                  <input
                    type="checkbox"
                    name="services"
                    value={option}
                    checked={form.services.includes(option)}
                    onChange={() => toggleService(option)}
                    className="h-4 w-4 shrink-0 accent-[var(--primary)]"
                  />
                  {option}
                </label>
              ))}
            </div>
            <div aria-live="polite">
              {servicesError && (
                <p className="mt-1.5 text-xs font-medium text-[var(--primary)]">
                  Please pick at least one service.
                </p>
              )}
            </div>
          </fieldset>

          {/* Kept as a fieldset/legend so screen readers tie the question to the
              radios, but the legend sits above the box like every other label
              rather than breaking the border the way a default legend does. */}
          <fieldset className="mt-6">
            <legend className="mb-1.5 block text-sm font-semibold text-[var(--text)]">
              Does the location have an outdoor water spigot and a power outlet?
              <span className="text-[var(--primary)]"> *</span>
            </legend>
            <p className="mb-2 text-xs text-[var(--secondary)]">
              We detail at your home or office and need access to water and
              power to do the job right.
            </p>
            <div className="flex flex-col gap-3 rounded-xl border border-[var(--border)] bg-[var(--background2)] px-5 py-4 sm:flex-row sm:gap-6">
              {QUOTE_UTILITY_OPTIONS.map((option) => (
                <label
                  key={option.value}
                  className="flex items-center gap-2 text-sm text-[var(--text)]"
                >
                  <input
                    type="radio"
                    name="utilities"
                    value={option.label}
                    required
                    checked={form.utilities === option.label}
                    onChange={(e) => update("utilities", e.target.value)}
                    className="h-4 w-4 accent-[var(--primary)]"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mt-6">
            <Field
              label="Anything else we should know?"
              htmlFor="notes"
              hint="Pet hair, spills, heavy dirt, paint concerns — anything that helps us quote accurately."
            >
              <textarea
                id="notes"
                name="notes"
                rows={4}
                className="form-input resize-y"
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
              />
            </Field>
          </div>

          {/* Honeypot: off-screen for people, irresistible to bots. */}
          <div
            className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
            aria-hidden
          >
            <label htmlFor="company">Company</label>
            <input
              id="company"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              value={form.company}
              onChange={(e) => update("company", e.target.value)}
            />
          </div>

          <div aria-live="polite">
            {status === "error" && (
              <p className="mt-6 rounded-lg border border-[var(--primary)] bg-[var(--background2)] p-4 text-sm text-[var(--text)]">
                {error} Please text us at{" "}
                <Link
                  href={SMS_HREF}
                  className="font-semibold text-[var(--primary)] underline"
                >
                  {PHONE_NUMBER}
                </Link>{" "}
                and we&apos;ll take care of you right away.
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={sending}
            className="mt-8 w-full rounded-md bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[var(--accent-light)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {sending ? "Sending…" : "Get My Quote"}
          </button>

          <p className="mt-4 text-center text-sm text-[var(--secondary)]">
            Rather just text? Reach us at{" "}
            <Link
              href={SMS_HREF}
              className="font-medium text-[var(--primary)] underline"
            >
              {PHONE_NUMBER}
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  hint,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-semibold text-[var(--text)]"
      >
        {label}
        {required && <span className="text-[var(--primary)]"> *</span>}
      </label>
      {children}
      {hint && <p className="mt-1.5 text-xs text-[var(--secondary)]">{hint}</p>}
    </div>
  );
}
