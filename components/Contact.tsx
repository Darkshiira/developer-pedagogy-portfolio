
"use client";

import { useState, type FormEvent } from "react";
import {
  Link2,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

const CONTACT_EMAIL = "hanna.arefi@outlook.com";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [opportunity, setOpportunity] = useState(
    "Full-time Fullstack Developer (.NET / Next.js)"
  );
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const subject = `Portfolio enquiry: ${opportunity}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Opportunity: ${opportunity}`,
      "",
      message,
    ].join("\n");

    const mailtoUrl =
      `mailto:${CONTACT_EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-[#eee6de] bg-white py-12 sm:py-16"
    >
      <div className="mx-auto grid max-w-[1200px] gap-8 px-5 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch lg:gap-9 lg:px-8">

        {/* LEFT COLUMN */}
        <div className="flex flex-col">
          {/* Eyebrow */}
          <p className="mb-2 flex items-center gap-1.5 font-mono text-[12px] font-bold uppercase tracking-[0.12em] text-teal">
            <Link2 size={12} />
            Let&apos;s connect
          </p>

          {/* Heading */}
          <h2 className="max-w-[420px] text-3xl font-bold leading-[1.05] tracking-tight text-[#172033] sm:text-[34px]">
            Ready to build something impactful together?
          </h2>

          {/* Introduction */}
          <p className="mt-4 max-w-[440px] text-[11px] leading-[1.8] text-[#686765]">
            Whether you&apos;re seeking an empathetic Fullstack
            Engineer for your team, have an architectural question
            about my projects, or want to discuss the intersection
            between education and software design — I&apos;d love
            to chat.
          </p>

          {/* Target roles panel */}
          <div className="mt-4 rounded-[10px] border border-[#e9ded4] bg-[#f5eee6] p-3">
            <p className="mb-2 flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-wide text-[#263247]">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              Target roles
            </p>

            <p className="text-[10px] leading-[1.8] text-[#344056]">
              Junior / Mid Fullstack Developer · Frontend Engineer
              (React / Next.js) · C# / .NET Backend Developer
            </p>

            <p className="mt-1.5 font-mono text-[10px] leading-relaxed text-[#686765]">
              Availability: Immediate (Remote, Hybrid, or Onsite)
            </p>
          </div>

          {/* Contact details */}
          <div className="mt-5 space-y-2">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-3 rounded-[9px] border border-[#eee6de] bg-[#faf5ef] px-3 py-3 transition-colors hover:border-teal"
            >
              <Mail
                size={15}
                className="shrink-0 text-teal"
              />

              <span className="min-w-0">
                <span className="block font-mono text-[11px] font-bold uppercase tracking-wide text-[#77716c]">
                  Direct email
                </span>

                <span className="mt-0.5 block break-all text-[10px] font-medium text-[#263247]">
                  {CONTACT_EMAIL}
                </span>
              </span>
            </a>

            <div className="flex items-center gap-3 rounded-[9px] border border-[#eee6de] bg-[#faf5ef] px-3 py-3">
              <MapPin
                size={15}
                className="shrink-0 text-orange-500"
              />

              <span className="min-w-0">
                <span className="block font-mono text-[11px] font-bold uppercase tracking-wide text-[#77716c]">
                  Location
                </span>

                <span className="mt-0.5 block text-[10px] text-[#263247]">
                  Sweden · Open to remote opportunities
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN — CONTACT FORM */}
        <div className="rounded-[13px] border border-[#e9ded4] bg-[#faf5ef] p-5 shadow-sm sm:p-6 lg:p-5 xl:p-6">
          {/* Form header */}
          <div className="mb-4 flex items-center justify-between gap-3 border-b border-[#eee5db] pb-3">
            <h3 className="text-[14px] font-extrabold text-[#172033]">
              Send a Message
            </h3>

            <span className="shrink-0 font-mono text-[10px] text-[#77716c]">
              Response within 24 hours
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">

            {/* Name + email */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block font-mono text-[11px] font-bold uppercase tracking-wide text-[#344056]"
                >
                  Your name *
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="e.g. Sven Andersson"
                  className="w-full rounded-[7px] border border-[#e7ded3] bg-white px-2.5 py-2 text-[10px] text-[#263247] outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/10 placeholder:text-[#a09a95]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block font-mono text-[11px] font-bold uppercase tracking-wide text-[#344056]"
                >
                  Email address *
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="e.g. hiring@company.se"
                  className="w-full rounded-[7px] border border-[#e7ded3] bg-white px-2.5 py-2 text-[10px] text-[#263247] outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/10 placeholder:text-[#a09a95]"
                />
              </div>
            </div>

            {/* Opportunity type */}
            <div>
              <label
                htmlFor="contact-opportunity"
                className="mb-1.5 block font-mono text-[11px] font-bold uppercase tracking-wide text-[#344056]"
              >
                Opportunity type
              </label>

              <select
                id="contact-opportunity"
                name="opportunity"
                value={opportunity}
                onChange={(event) => setOpportunity(event.target.value)}
                className="w-full rounded-[7px] border border-[#e7ded3] bg-white px-2.5 py-2 text-[10px] text-[#263247] outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/10"
              >
                <option>
                  Full-time Fullstack Developer (.NET / Next.js)
                </option>
                <option>Frontend Developer (React / Next.js)</option>
                <option>Backend Developer (C# / .NET)</option>
                <option>Junior Developer Opportunity</option>
                <option>Freelance / Project Collaboration</option>
                <option>Other / Just saying hello</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="mb-1.5 block font-mono text-[11px] font-bold uppercase tracking-wide text-[#344056]"
              >
                Project details or message *
              </label>

              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Tell me about your tech stack, team culture, or the challenge you're solving..."
                className="min-h-[100px] w-full resize-y rounded-[7px] border border-[#e7ded3] bg-white px-2.5 py-2.5 text-[10px] leading-relaxed text-[#263247] outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/10 placeholder:text-[#a09a95]"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-[7px] bg-[#17695d] px-4 py-3 text-[10px] font-bold text-white transition-colors hover:bg-[#105347] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
            >
              <Send size={12} />
              Send Message
            </button>

            <p className="text-center text-[8px] leading-relaxed text-[#77716c]">
              Submitting opens your default email application.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
