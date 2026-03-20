"use client";
import React from "react";
import Link from "next/link";
import { Sansation } from 'next/font/google';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import './globals.css';

const sansation = Sansation({
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const Footer = () => {
  return (
    <div className="squeezetainer py-[10vh] bg-[var(--primary)] text-[var(--background)]">
      <div className="w-full text-sm flex flex-col lg:flex-row sm:gap-8">
        {/* LEFT — BUSINESS INFO */}
        <div className="flex flex-col gap-2 md:col-span-2 basis-2/5">
          <h2 className="font-bold">Brotherstone Auto Detailing</h2>
          <p className="max-w-[400px]">
            Brotherstone Auto Detailing provides professional interior and
            exterior detailing services. We focus on high-quality care,
            attention to detail, and restoring your vehicle to a like-new
            finish.
          </p>
        </div>

        <hr className="sm:hidden mt-4 mb-4 border-t-[1px] border-[var(--background)/40]" />

        {/* RIGHT — LINKS */}
        <div className="flex flex-col gap-4 sm:flex-row justify-between basis-3/5">
          {/* NAVIGATION */}
          <div className="flex flex-col gap-3">
            <span className="font-bold">Navigation</span>
            <Link href="#hero" className="hover:text-[var(--accent)] transition-colors">
              home
            </Link>
            <Link href="#about" className="hover:text-[var(--accent)] transition-colors">
              about us
            </Link>
            <Link href="#pricing" className="hover:text-[var(--accent)] transition-colors">
              services
            </Link>
            <Link href="#pricing" className="hover:text-[var(--accent)] transition-colors">
              pricing
            </Link>
            <Link href="#contact" className="hover:text-[var(--accent)] transition-colors">
              contact
            </Link>
          </div>

          {/* SERVICES */}
          <div className="flex flex-col gap-3">
            <span className="font-bold">Services</span>
            <Link href="#services" className="hover:text-[var(--accent)] transition-colors">
              interior detailing
            </Link>
            <Link href="#services" className="hover:text-[var(--accent)] transition-colors">
              exterior detailing
            </Link>
            <Link href="#services" className="hover:text-[var(--accent)] transition-colors">
              full detail
            </Link>
            <Link href="#services" className="hover:text-[var(--accent)] transition-colors">
              paint protection
            </Link>
          </div>

          {/* CONTACT */}
          <div className="flex flex-col gap-3">
            <span className="font-bold">Contact Us</span>
            <span>brotherstoneauto@gmail.com</span>
            <span>Houston, Texas</span>
          </div>
        </div>
      </div>

      <hr className="mt-4 lg:mt-6 border-t-[1px] border-[var(--background)/40]" />

      {/* SOCIALS */}
      <div className="mt-4 flex items-center sm:justify-center gap-4">
        <Link href="https://www.linkedin.com" target="_blank">
          <FaLinkedin className="text-[var(--background)] transform transition-transform duration-150 hover:scale-110 hover:text-[var(--accent)]" />
        </Link>
        <Link href="https://twitter.com" target="_blank">
          <FaXTwitter className="text-[var(--background)] transform transition-transform duration-150 hover:scale-110 hover:text-[var(--accent)]" />
        </Link>
        <Link href="https://www.facebook.com" target="_blank">
          <FaFacebook className="text-[var(--background)] transform transition-transform duration-150 hover:scale-110 hover:text-[var(--accent)]" />
        </Link>
      </div>

      <p className="pt-2 md:pt-4 sm:text-center">
        Brotherstone Auto Detailing |{" "}
        <Link
          className="hover:text-[var(--accent)] transition-colors"
          href={"/privacy-policy.pdf"}
          target="_blank"
        >
          Privacy
        </Link>
      </p>
    </div>
  );
};

export default Footer;