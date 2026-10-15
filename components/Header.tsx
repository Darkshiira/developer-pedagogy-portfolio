
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  GraduationCap,
  Mail,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { label: "Why me?", href: "#advantage" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Career", href: "#career" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    function handleOutsideClick(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !headerRef.current?.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-[#e9e0d6] bg-[#fcf8f3]/95 shadow-[0_2px_15px_rgba(32,37,49,0.04)] backdrop-blur-xl"
    >
      <div className="mx-auto flex h-[76px] max-w-[1500px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">

        {/* BRAND */}
        <a
          href="#home"
          onClick={closeMenu}
          aria-label="Dev & Pedagogy - Home"
          className="group flex shrink-0 items-center gap-3"
        >
          <span className="flex size-11 items-center justify-center rounded-2xl bg-[#17695d] text-white shadow-sm transition-transform duration-300 group-hover:-rotate-6">
            <GraduationCap size={24} strokeWidth={2} />
          </span>

          <span className="flex flex-col leading-tight">
            <span className="whitespace-nowrap text-[17px] font-extrabold tracking-tight text-[#202531] sm:text-[19px]">
              Dev &amp; Pedagogy
            </span>

            <span className="mt-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#17695d]">
              Fullstack Developer
            </span>
          </span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 xl:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-[13px] font-semibold text-[#62615e] transition-all duration-200 hover:bg-[#eaece4] hover:text-[#17695d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17695d]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden shrink-0 items-center gap-3 xl:flex">

          {/* AVAILABILITY */}
          <div className="hidden items-center gap-2 rounded-full border border-[#c8e8d3] bg-[#eaf7ed] px-3 py-2 2xl:flex">
            <span className="size-2 rounded-full bg-[#20a875]" />
            <span className="whitespace-nowrap text-[11px] font-semibold text-[#246847]">
              Available for hire
            </span>
          </div>

          {/* CONTACT BUTTON */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-[#17695d] px-4 py-2.5 text-[13px] font-bold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#105347] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17695d]"
          >
            <Mail size={16} />
            Get in Touch
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          {/* PROFILE */}
          <a
            href="https://www.linkedin.com/in/hanna-arefi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
            className="rounded-full transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17695d]"
          >
            <Image
              src="/images/profile/Hanna.jpg"
              alt="Hanna Arefi"
              width={40}
              height={40}
              className="size-10 rounded-full border-2 border-[#e9e0d6] object-cover"
            />
          </a>
        </div>

        {/* MOBILE / TABLET ACTIONS */}
        <div className="flex items-center gap-3 xl:hidden">

          {/* AVAILABILITY DOT */}
          <span
            className="flex size-9 items-center justify-center rounded-full bg-[#eaf7ed]"
            title="Available for hire"
            aria-label="Available for hire"
          >
            <span className="size-2.5 rounded-full bg-[#20a875]" />
          </span>

          {/* MENU BUTTON */}
          <button
            ref={menuButtonRef}
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex size-11 items-center justify-center rounded-xl bg-[#17695d] text-white shadow-sm transition-colors hover:bg-[#105347] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17695d]"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE / TABLET DROPDOWN */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-76px)] overflow-y-auto border-b border-[#e9e0d6] bg-[#fcf8f3] shadow-[0_15px_30px_rgba(32,37,49,0.1)] xl:hidden"
        >
          <div className="mx-auto max-w-[1500px] px-5 py-5 sm:px-8">

            {/* AVAILABILITY */}
            <div className="mb-4 flex w-fit items-center gap-2 rounded-full border border-[#c8e8d3] bg-[#eaf7ed] px-3 py-1.5">
              <span className="size-2 rounded-full bg-[#20a875]" />
              <span className="text-[11px] font-semibold text-[#246847]">
                Available for hire
              </span>
            </div>

            {/* NAV LINKS */}
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold text-[#414440] transition-colors hover:bg-[#edf1e9] hover:text-[#17695d] focus-visible:outline-2 focus-visible:outline-[#17695d]"
                >
                  {link.label}

                  <ArrowUpRight
                    size={17}
                    className="text-[#a1aaa3] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#17695d]"
                  />
                </a>
              ))}
            </div>

            {/* CONTACT BUTTON */}
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#17695d] px-4 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#105347]"
            >
              <Mail size={17} />
              Get in Touch
              <ArrowUpRight size={16} />
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/hanna-arefi/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-[#62615e] hover:text-[#17695d]"
            >
              Connect with me on LinkedIn
              <ArrowUpRight size={14} />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
