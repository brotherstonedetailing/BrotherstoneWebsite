"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BOOKING_URL,
  DEFAULT_SERVICE_AREA,
  QUOTE_SERVICES,
  SERVICE_AREAS,
  type ServiceArea,
} from "@/app/lib/constants";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  area: ServiceArea;
  vehicleType: string;
  year: string;
  make: string;
  model: string;
  services: string[];
  message: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  area: DEFAULT_SERVICE_AREA,
  vehicleType: "",
  year: "",
  make: "",
  model: "",
  services: [],
  message: "",
};

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggleService(service: string) {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong."
      );
    }
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

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-lg sm:p-8"
        >
          {status === "success" ? (
            <div className="rounded-xl bg-green-50 px-6 py-10 text-center">
              <p className="text-lg font-semibold text-green-800">
                Thank you! Your quote request has been sent.
              </p>
              <p className="mt-2 text-green-700">
                We&apos;ll be in touch shortly.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm font-medium text-[var(--primary)] underline"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="First Name" required>
                  <input
                    type="text"
                    required
                    value={form.firstName}
                    onChange={(e) => updateField("firstName", e.target.value)}
                    className="form-input"
                  />
                </Field>
                <Field label="Last Name" required>
                  <input
                    type="text"
                    required
                    value={form.lastName}
                    onChange={(e) => updateField("lastName", e.target.value)}
                    className="form-input"
                  />
                </Field>
                <Field label="Email" required>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className="form-input"
                  />
                </Field>
                <Field label="Phone" required>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className="form-input"
                  />
                </Field>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Service Area">
                  <select
                    value={form.area}
                    onChange={(e) =>
                      updateField("area", e.target.value as ServiceArea)
                    }
                    className="form-input"
                  >
                    {SERVICE_AREAS.map((option) => (
                      <option key={option} value={option}>
                        {option}, TX
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Vehicle Type">
                  <select
                    value={form.vehicleType}
                    onChange={(e) => updateField("vehicleType", e.target.value)}
                    className="form-input"
                  >
                    <option value="">Select vehicle type</option>
                    <option value="Coupe / Sedan">Coupe / Sedan</option>
                    <option value="Truck / SUV">Truck / SUV</option>
                  </select>
                </Field>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <Field label="Year">
                  <input
                    type="text"
                    value={form.year}
                    onChange={(e) => updateField("year", e.target.value)}
                    className="form-input"
                    placeholder="2024"
                  />
                </Field>
                <Field label="Make">
                  <input
                    type="text"
                    value={form.make}
                    onChange={(e) => updateField("make", e.target.value)}
                    className="form-input"
                    placeholder="Toyota"
                  />
                </Field>
                <Field label="Model">
                  <input
                    type="text"
                    value={form.model}
                    onChange={(e) => updateField("model", e.target.value)}
                    className="form-input"
                    placeholder="Camry"
                  />
                </Field>
              </div>

              <fieldset className="mt-6">
                <legend className="mb-3 text-sm font-semibold text-[var(--text)]">
                  Services Interested In
                </legend>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {QUOTE_SERVICES.map((service) => (
                    <label
                      key={service}
                      className="flex cursor-pointer items-center gap-3 rounded-lg border border-[var(--border)] px-4 py-3 transition hover:border-[var(--primary)] hover:bg-[var(--background)]"
                    >
                      <input
                        type="checkbox"
                        checked={form.services.includes(service)}
                        onChange={() => toggleService(service)}
                        className="h-4 w-4 accent-[var(--primary)]"
                      />
                      <span className="text-sm text-[var(--text)]">{service}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="mt-4">
                <Field label="Additional Details">
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    className="form-input resize-y"
                    placeholder="Tell us about your vehicle or any special requests..."
                  />
                </Field>
              </div>

              {status === "error" && (
                <p className="mt-4 text-sm text-red-600">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-6 w-full rounded-lg bg-[var(--primary)] px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[var(--secondary)] disabled:opacity-60 sm:w-auto"
              >
                {status === "loading" ? "Sending..." : "Submit Quote Request"}
              </button>
            </>
          )}
        </form>

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

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-[var(--text)]">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </span>
      {children}
    </label>
  );
}
