
export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-24 border-b border-line"
    >
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.5fr_0.8fr] lg:px-8 lg:py-24">
        <div>
          
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e9ded1] bg-[#f5eee6] px-3 py-1.5 font-mono text-[10px] font-extrabold uppercase tracking-[0.04em] text-[#273449]">
            <span className="relative flex size-2 shrink-0">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-orange-500" />
            </span>

            Former Elementary Educator (Ages 6–12) → Fullstack Software Engineer
          </p>


          <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            Bridging pedagogical clarity with{" "}
            <span className="text-teal">
              clean, robust fullstack engineering.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
            Hi, I am <span className="font-bold text-ink">Hanna Arefi</span> and I combine a background in teaching with software
            development to build thoughtful, accessible and
            user-focused digital experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-teal px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-dark"
            >
              Explore projects ↗
            </a>

            <a
              href="#advantage"
              className="rounded-lg border border-line bg-white px-5 py-3 text-sm font-semibold transition-colors hover:border-teal"
            >
              The educator advantage
            </a>
          </div>
        </div>

        <aside className="rounded-panel border border-line bg-white p-6 shadow-sm lg:p-7">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-teal">
            Core engineering belief
          </p>

          <blockquote className="text-lg font-semibold leading-7 tracking-tight">
            “If you can&apos;t explain the architecture simply,
            the architecture may need another look.”
          </blockquote>

          <p className="mt-4 text-sm leading-6 text-muted">
            Clear thinking, readable code and thoughtful
            communication make software easier to build,
            maintain and use.
          </p>
        </aside>
      </div>
    </section>
  );
}