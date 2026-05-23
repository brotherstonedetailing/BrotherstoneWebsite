"use client";

import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BOOKING_URL, CONTACT_EMAIL, SOCIAL_LINKS } from "@/app/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-[var(--secondary)] text-white">
      <div className="squeezetainer py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <h2 className="text-lg font-bold">Brotherstone Auto Detailing</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80">
              Professional interior and exterior mobile detailing across Katy
              and surrounding areas. Quality care, honest pricing, and results
              that make your vehicle shine.
            </p>
          </div>

          <div>
            <span className="text-sm font-bold uppercase tracking-wide">
              Navigation
            </span>
            <nav className="mt-4 flex flex-col gap-2 text-sm text-white/80">
              <Link href="#hero" className="hover:text-white transition-colors">
                Home
              </Link>
              <Link href="#about" className="hover:text-white transition-colors">
                About
              </Link>
              <Link href="#pricing" className="hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="#quote" className="hover:text-white transition-colors">
                Get a Quote
              </Link>
              <Link
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Book Online
              </Link>
            </nav>
          </div>

          <div>
            <span className="text-sm font-bold uppercase tracking-wide">
              Contact
            </span>
            <div className="mt-4 flex flex-col gap-2 text-sm text-white/80">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="hover:text-white transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
              <span>Katy, Texas</span>
            </div>
          </div>
        </div>

        <hr className="my-8 border-white/20" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-4">
            <Link
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="h-5 w-5 text-white/80 transition hover:scale-110 hover:text-white" />
            </Link>
            <Link
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5 text-white/80 transition hover:scale-110 hover:text-white" />
            </Link>
            {SOCIAL_LINKS.facebook !== "#" && (
              <Link
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook className="h-5 w-5 text-white/80 transition hover:scale-110 hover:text-white" />
              </Link>
            )}
          </div>

          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Brotherstone Auto Detailing
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
