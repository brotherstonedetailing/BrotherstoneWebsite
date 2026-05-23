"use client";
import React, { ReactNode, useState } from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BOOKING_URL, SOCIAL_LINKS } from "@/app/lib/constants";

type NavItemProps = {
  children: ReactNode;
  href?: string;
  clickFunction?: () => void;
  external?: boolean;
};

const NavItem: React.FC<NavItemProps> = ({
  children,
  href = "",
  clickFunction,
  external = false,
}) => {
  return (
    <Link
      href={href}
      onClick={clickFunction}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="px-4 text-sm tracking-wide text-[var(--text)] transition-colors hover:text-[var(--primary)]"
    >
      {children}
    </Link>
  );
};

type MenuButtonProps = {
  isOpen: boolean;
  handler: () => void;
};

const MenuButton: React.FC<MenuButtonProps> = ({ isOpen, handler }) => {
  return (
    <button
      onClick={handler}
      className="flex h-9 w-9 items-center justify-center rounded-md text-[var(--text)] transition-colors hover:bg-[var(--background2)] md:hidden"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      <svg
        stroke="currentColor"
        fill="none"
        className={`hamburger ${isOpen ? "hamburger-close" : ""}`}
        viewBox="-10 -10 120 120"
        width="32"
      >
        <path
          className={`line ${isOpen ? "line-close" : ""}`}
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
        />
      </svg>
    </button>
  );
};

const SocialLinks = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <Link
      href={SOCIAL_LINKS.instagram}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="text-[var(--text)] transition-colors hover:text-[var(--primary)]"
    >
      <FaInstagram className="h-5 w-5" />
    </Link>
    <Link
      href={SOCIAL_LINKS.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="text-[var(--text)] transition-colors hover:text-[var(--primary)]"
    >
      <FaLinkedin className="h-5 w-5" />
    </Link>
    {SOCIAL_LINKS.facebook !== "#" && (
      <Link
        href={SOCIAL_LINKS.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="text-[var(--text)] transition-colors hover:text-[var(--primary)]"
      >
        <FaFacebook className="h-5 w-5" />
      </Link>
    )}
  </div>
);

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav((prev) => !prev);
  const closeNav = () => setNav(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-[var(--border)] bg-white/95 backdrop-blur-sm">
        <div className="squeezetainer grid h-[var(--navbar-height)] grid-cols-3 items-center">
          <Link
            href="#hero"
            onClick={closeNav}
            className="text-lg font-bold tracking-wide text-[var(--text)] transition-colors hover:text-[var(--primary)]"
          >
            Brotherstone
          </Link>

          <nav className="hidden items-center justify-self-center md:flex">
            <NavItem href="#pricing">Services and Pricing</NavItem>
            <NavItem href="#testimonials">Reviews</NavItem>
            <NavItem href={BOOKING_URL} external>
              Book Online
            </NavItem>
          </nav>

          <div className="flex items-center justify-self-end gap-3">
            <SocialLinks className="hidden md:flex" />
            <MenuButton isOpen={nav} handler={toggleNav} />
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-x-0 top-[var(--navbar-height)] z-40 border-b border-[var(--border)] bg-white transition-all duration-200 md:hidden ${
          nav
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="squeezetainer flex flex-col gap-1 py-3">
          <NavItem clickFunction={closeNav} href="#pricing">
            Services and Pricing
          </NavItem>
          <NavItem clickFunction={closeNav} href="#testimonials">
            Reviews
          </NavItem>
          <NavItem clickFunction={closeNav} href={BOOKING_URL} external>
            Book Online
          </NavItem>
          <SocialLinks className="mt-3 border-t border-[var(--border)] pt-4" />
        </nav>
      </div>
    </>
  );
};

export default Navbar;
