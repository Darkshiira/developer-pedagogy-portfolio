"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";

const CONTACT_EMAIL = "hanna.arefi@outlook.com";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const emailSubject = subject.trim() || "Portfolio enquiry";

    const body = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n");

    const mailtoUrl =
      `mailto:${CONTACT_EMAIL}` +
      `?subject=${encodeURIComponent(emailSubject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  }

  const inputStyles =
    "w-full rounded-xl border border-[#e7ded3] bg-white px-4 py-3 text-[14px] text-[#263247] outline-none transition placeholder:text-[#a09a95] focus:border-[#17695d] focus:ring-2 focus:ring-[#17695d]/10";

  const labelStyles = "mb-2 block text-[12px] font-bold text-[#344056]";

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-[#e9e0d6] bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-10">
        {/* SECTION HEADING */}
        <div className="mb-10 grid gap-5 border-b border-[#e9e2da] pb-8 md:grid-cols-[1.3fr_1fr] md:items-end">
          <div>
            <p className="mb-4 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#c26b25]">
              <MessageCircle size={16} />
              Let&apos;s Connect
            </p>

            <h2 className="max-w-[600px] text-3xl font-extrabold leading-[1.15] tracking-[-0.035em] text-[#202531] sm:text-4xl">
              Have something in mind?
              <span className="mt-1 block text-[#17695d]">
                Let&apos;s talk.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-[15px] leading-7 text-[#667078] md:justify-self-end">
            Whether you have a job opportunity, a project idea, or simply want
            to say hello, I&apos;d love to hear from you.
          </p>
        </div>

        {/* CONTACT CONTENT */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-12">
          {/* LEFT COLUMN */}
          <div className="flex flex-col">
            <h3 className="text-xl font-extrabold tracking-tight text-[#202531] sm:text-2xl">
              A little more about connecting
            </h3>

            <p className="mt-4 max-w-[440px] text-[14px] leading-7 text-[#667078]">
              I&apos;m always interested in opportunities where I can learn,
              contribute, and build something useful.
            </p>

            <p className="mt-3 max-w-[440px] text-[14px] leading-7 text-[#667078]">
              If you think I might be a good fit for your team or have something
              you&apos;d like to collaborate on, feel free to get in touch!
            </p>

            {/* AVAILABILITY CARD */}
            <div className="mt-7 rounded-2xl border border-[#cce7d7] bg-[#f0f8f2] p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#dcefe2] text-[#17695d]">
                  <CheckCircle2 size={21} />
                </span>

                <div>
                  <h4 className="text-[15px] font-extrabold text-[#202531]">
                    Open to opportunities
                  </h4>

                  <p className="mt-2 text-[13px] leading-6 text-[#587269]">
                    I&apos;m looking for my next opportunity in web development,
                    where I can continue growing as a developer and contribute
                    to meaningful projects.
                  </p>
                </div>
              </div>
            </div>

            {/* CONTACT DETAILS */}
            <div className="mt-7 space-y-3">
              {/* EMAIL */}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group flex items-center justify-between gap-3 rounded-xl border border-[#e9ded4] bg-[#fcf8f3] p-4 transition-all hover:border-[#b7d7c6] hover:bg-[#f0f8f2]"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#e8f5ed] text-[#17695d]">
                    <Mail size={19} />
                  </span>

                  <div className="min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-wide text-[#778087]">
                      Email me directly
                    </p>

                    <p className="mt-1 break-all text-[13px] font-semibold text-[#263247]">
                      {CONTACT_EMAIL}
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-[#17695d] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              {/* LOCATION */}
              <div className="flex items-center gap-3 rounded-xl border border-[#e9ded4] bg-[#fcf8f3] p-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#fff1df] text-[#c26b25]">
                  <MapPin size={19} />
                </span>

                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wide text-[#778087]">
                    Based in
                  </p>

                  <p className="mt-1 text-[13px] font-semibold text-[#263247]">
                    Stockholm, Sweden
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — FORM */}
          <div className="rounded-2xl border border-[#e9ded4] bg-[#faf5ef] p-5 shadow-sm sm:p-7 lg:p-8">
            {/* FORM HEADER */}
            <div className="mb-6 border-b border-[#e9e2da] pb-5">
              <div className="mb-2 flex items-center gap-2 text-[#17695d]">
                <Send size={18} />

                <h3 className="text-lg font-extrabold text-[#202531]">
                  Send me a message
                </h3>
              </div>

              <p className="text-[13px] leading-6 text-[#778087]">
                Fill in the details below and your email application will open
                with your message ready to send.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* NAME + EMAIL */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className={labelStyles}>
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
                    placeholder="Your name"
                    className={inputStyles}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className={labelStyles}>
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
                    placeholder="you@example.com"
                    className={inputStyles}
                  />
                </div>
              </div>

              {/* SUBJECT */}
              <div>
                <label htmlFor="contact-subject" className={labelStyles}>
                  Subject
                </label>

                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                  placeholder="What's on your mind?"
                  className={inputStyles}
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label htmlFor="contact-message" className={labelStyles}>
                  Your message *
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Tell me a little about what you have in mind..."
                  className={`${inputStyles} min-h-[150px] resize-y leading-7`}
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#17695d] px-5 py-3.5 text-[14px] font-bold text-white transition-all hover:bg-[#105347] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17695d]"
              >
                Open email to send
                <Send size={17} />
              </button>

              <p className="text-center text-[11px] leading-5 text-[#778087]">
                Your email application will open. Remember to press Send there
                to deliver your message.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
