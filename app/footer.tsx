import React from "react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="squeezetainer py-[10vh] bg-white">
      <div className="text-black w-full text-sm flex flex-col lg:flex-row sm:gap-8">
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

        <hr className="sm:hidden mt-4 mb-4 border-t-[1px] border-gray-200" />

        {/* RIGHT — LINKS */}
        <div className="flex flex-col gap-4 sm:flex-row justify-between basis-3/5">
          {/* NAVIGATION */}
          <div className="flex flex-col gap-3">
            <span className="font-bold">Navigation</span>
            <Link href="/" className="hover:opacity-80">
              home
            </Link>
            <Link href="/aboutUs" className="hover:opacity-80">
              about us
            </Link>
            <Link href="/services" className="hover:opacity-80">
              services
            </Link>
            <Link href="/pricing" className="hover:opacity-80">
              pricing
            </Link>
            <Link href="/contact" className="hover:opacity-80">
              contact
            </Link>
          </div>

          {/* SERVICES */}
          <div className="flex flex-col gap-3">
            <span className="font-bold">Services</span>
            <Link href="/services" className="hover:opacity-80">
              interior detailing
            </Link>
            <Link href="/services" className="hover:opacity-80">
              exterior detailing
            </Link>
            <Link href="/services" className="hover:opacity-80">
              full detail
            </Link>
            <Link href="/services" className="hover:opacity-80">
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

      <hr className="mt-4 lg:mt-6 border-t-[1px] border-black" />

      {/* SOCIALS */}
      <div className="mt-4 text-black flex items-center sm:justify-center gap-4">
        <Link href="https://www.linkedin.com" target="_blank">
          <FaLinkedin className="transform transition-transform duration-150 hover:scale-110" />
        </Link>
        <Link href="https://twitter.com" target="_blank">
          <FaXTwitter className="transform transition-transform duration-150 hover:scale-110" />
        </Link>
        <Link href="https://www.facebook.com" target="_blank">
          <FaFacebook className="transform transition-transform duration-150 hover:scale-110" />
        </Link>
      </div>

      <p className="pt-2 md:pt-4 sm:text-center text-black">
        Brotherstone Auto Detailing |{" "}
        <Link
          className="hover:opacity-80"
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