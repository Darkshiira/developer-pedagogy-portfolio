
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  GraduationCap,
  Mail,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { label: "The Teacher Advantage", href: "#advantage" },
  { label: "Featured Projects", href: "#projects" },
  { label: "Technical Toolkit", href: "#skills" },
  { label: "Journey", href: "#career" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e9e0d6] bg-[#fcf8f3]/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex min-h-[72px] max-w-[1600px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">

        {/* LOGO + BRAND */}
        <a
          href="#home"
          aria-label="Dev & Pedagogy — home"
          className="flex shrink-0 items-center gap-3"
        >
          <span className="flex size-10 items-center justify-center rounded-xl bg-[#17695d] text-white shadow-sm">
            <GraduationCap size={23} strokeWidth={2.2} />
          </span>

          <span className="flex flex-col leading-tight">
            <span className="whitespace-nowrap text-[16px] font-extrabold tracking-tight text-[#202531]">
              Dev &amp; Pedagogy
            </span>

            <span className="mt-1 whitespace-nowrap font-mono text-[10px] font-bold uppercase tracking-[0.13em] text-[#17695d]">
              Fullstack Engineer
            </span>
          </span>
        </a>

        {/* AVAILABILITY BADGE */}
        <div className="hidden shrink-0 items-center gap-2 rounded-full border border-[#c8f0d6] bg-[#e6f8eb] px-3 py-1.5 xl:flex">
          <span className="size-2 rounded-full bg-[#20a875]" />

          <span className="whitespace-nowrap font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-[#246847]">
            Available for hire
          </span>
        </div>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Main navigation"
          className="hidden flex-1 items-center justify-end gap-5 xl:flex 2xl:gap-8"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-[13px] font-medium text-[#5e5d5a] transition-colors hover:text-[#17695d]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CONTACT BUTTON */}
        <a
          href="#contact"
          className="hidden shrink-0 items-center gap-2 rounded-xl border border-[#e7ded3] bg-[#f4eee6] px-4 py-2 text-[13px] font-semibold text-[#414440] shadow-sm transition-colors hover:border-[#17695d] hover:text-[#17695d] sm:inline-flex"
        >
          <Mail size={16} className="text-[#17695d]" />
          <span>Get in Touch</span>
        </a>

        {/* PROFILE IMAGE */}
        <a
          href="https://www.linkedin.com/in/hanna-arefi/"
          aria-label="To Hanna Arefi's LinkedIn profile"
          className="hidden shrink-0 sm:block"
        >
          <Image
            src="/images/profile/Hanna.jpg"
            alt="Profile"
            width={36}
            height={36}
            className="size-9 rounded-full border-2 border-[#e9e0d6] object-cover"
          />
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-[#e7ded3] text-[#202531] transition-colors hover:bg-[#f4eee6] xl:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute left-0 right-0 top-full border-b border-[#e9e0d6] bg-[#fcf8f3] px-5 py-4 shadow-lg xl:hidden"
        >
          <div className="mx-auto flex max-w-[1600px] flex-col gap-1">
            {/* Availability badge on mobile */}
            <div className="mb-3 flex w-fit items-center gap-2 rounded-full border border-[#c8f0d6] bg-[#e6f8eb] px-3 py-1.5">
              <span className="size-2 rounded-full bg-[#20a875]" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#246847]">
                Available for hire
              </span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-[#414440] transition-colors hover:bg-[#f4eee6] hover:text-[#17695d]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[#17695d] px-4 py-3 text-sm font-semibold text-white hover:bg-[#105347]"
            >
              <Mail size={16} />
              Get in Touch
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}