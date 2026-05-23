"use client";

import { useState } from "react";
import Link from "next/link";
import {
  PRICING_PLANS,
  VEHICLE_TIERS,
  type VehicleTier,
} from "@/app/lib/constants";

export default function PricingSection() {
  const [tier, setTier] = useState<VehicleTier>("coupe");

  return (
    <section id="pricing" className="bg-[var(--background2)] py-20 scroll-mt-28">
      <div className="squeezetainer">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-[var(--text)] lg:text-4xl">
            What we offer
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--secondary)] lg:text-lg">
            Maintaining your car, inside and out can be done right from the
            comfort of your home. Getting a professional detail at least once
            every 6 months has been proven to increase resell value. On top of
            that, nothing beats the feeling of driving a clean, fresh‑smelling
            vehicle—every surface restored, every detail taken care of.
          </p>
        </div>

        <div className="mb-10 flex justify-center">
          <div className="inline-flex rounded-lg border border-[var(--border)] bg-[var(--background2)] p-1">
            {VEHICLE_TIERS.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setTier(option.id)}
                className={`rounded-md px-5 py-2.5 text-sm font-semibold transition ${
                  tier === option.id
                    ? "bg-[var(--primary)] text-white shadow-sm"
                    : "text-[var(--secondary)] hover:text-[var(--text)]"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <article
              key={plan.id}
              className={`flex flex-col rounded-2xl border p-6 shadow-md lg:p-7 ${
                plan.featured
                  ? "border-[var(--primary)] bg-[var(--primary)] text-white shadow-xl lg:scale-[1.02]"
                  : "border-[var(--border)] bg-[var(--background2)]"
              }`}
            >
              <h3
                className={`text-xl font-bold ${
                  plan.featured ? "text-white" : "text-[var(--primary)]"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`mt-1 text-sm ${
                  plan.featured ? "text-white/80" : "text-[var(--secondary)]"
                }`}
              >
                Starting at
              </p>
              <p
                className={`mt-1 text-4xl font-bold ${
                  plan.featured ? "text-white" : "text-[var(--text)]"
                }`}
              >
                {plan.prices[tier]}
              </p>
              <p
                className={`mt-4 text-sm leading-relaxed ${
                  plan.featured ? "text-white/90" : "text-[var(--secondary)]"
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-6 flex-1 space-y-5">
                {plan.sections.map((section) => (
                  <div key={section.title ?? section.items[0]}>
                    {section.title && (
                      <h4
                        className={`mb-2 text-sm font-bold uppercase tracking-wide ${
                          plan.featured ? "text-white" : "text-[var(--text)]"
                        }`}
                      >
                        {section.title}
                      </h4>
                    )}
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className={`flex items-start gap-2 text-sm ${
                            plan.featured
                              ? "text-white/90"
                              : "text-[var(--secondary)]"
                          }`}
                        >
                          <span
                            className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                              plan.featured
                                ? "bg-white"
                                : "bg-[var(--primary)]"
                            }`}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <Link
                href="#quote"
                className={`mt-8 block rounded-lg py-3 text-center text-sm font-semibold uppercase tracking-wide transition ${
                  plan.featured
                    ? "bg-white text-[var(--primary)] hover:bg-[var(--background)]"
                    : "bg-[var(--primary)] text-white hover:bg-[var(--secondary)]"
                }`}
              >
                Start Quote
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
