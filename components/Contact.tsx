
export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:items-start lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-teal">
            Let&apos;s connect
          </p>

          <h2 className="mt-3 max-w-lg text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to build something impactful together?
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-7 text-muted">
            I&apos;m interested in opportunities where thoughtful
            engineering, clear communication and user-focused
            problem-solving come together.
          </p>

          <div className="mt-8 space-y-4 text-sm">
            <a
              href="mailto:you@example.com"
              className="block text-teal hover:underline"
            >
              you@example.com ↗
            </a>

            <a
              href="https://github.com/yourname"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-teal"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/yourname/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-teal"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="rounded-panel border border-line bg-card p-6 sm:p-8">
          <h3 className="text-lg font-bold">
            Send me a message
          </h3>

          <p className="mt-2 text-sm text-muted">
            The simplest way to reach me is by email.
          </p>

          <a
            href="mailto:you@example.com?subject=Hello"
            className="mt-6 inline-flex rounded-lg bg-teal px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-dark"
          >
            Write an email ↗
          </a>
        </div>
      </div>
    </section>
  );
}