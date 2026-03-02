"use client";
import React, { ReactNode, useState } from "react";
import Link from "next/link";

type NavItemProps = {
  children: ReactNode;
  href?: string;
  clickFunction?: () => void;
};

const NavItem: React.FC<NavItemProps> = ({
  children,
  href = "",
  clickFunction,
}) => {
  return (
    <Link
      href={href}
      onClick={clickFunction}
      className="text-md tracking-wide px-6 hover:opacity-70 transition-all duration-300"
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
      className="md:hidden cursor-pointer overflow-hidden text-black"
      aria-label="Navigation Button"
    >
      <svg
        stroke="black"
        fill="none"
        className={`hamburger ${isOpen ? "hamburger-close" : ""}`}
        viewBox="-10 -10 120 120"
        width="50"
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

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav((prev) => !prev);
  const closeNav = () => setNav(false);

  return (
    <>
      {/* TOP NAVBAR */}
      <div
        className={`${
          nav ? "shadow" : ""
        } flex items-center justify-between fixed z-50 w-full squeezetainer py-6 bg-white top-0 h-nav text-black`}
      >
        <Link href="/" onClick={closeNav}>
          Brotherstone
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center">
          <NavItem href="/aboutUs">about us</NavItem>


          <NavItem href="/donate">donate</NavItem>
          <NavItem href="/contact">contact</NavItem>
        </div>

        {/* HAMBURGER */}
        <MenuButton isOpen={nav} handler={toggleNav} />
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed md:hidden top-0 left-0 h-screen w-screen bg-white z-40 transform transition-transform duration-200 ${
          nav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col pt-[15vh] px-6 gap-8 text-lg text-black">
          <NavItem clickFunction={closeNav} href="/">
            home
          </NavItem>
          <NavItem clickFunction={closeNav} href="/aboutUs">
            about us
          </NavItem>
          <NavItem clickFunction={closeNav} href="/currentProjects">
            current projects
          </NavItem>
          <NavItem clickFunction={closeNav} href="/pastProjects">
            past projects
          </NavItem>
          <NavItem clickFunction={closeNav} href="/donate">
            donate
          </NavItem>
          <NavItem clickFunction={closeNav} href="/contact">
            contact
          </NavItem>
        </div>
      </div>
    </>
  );
};

export default Navbar;