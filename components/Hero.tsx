export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24 border-b border-line">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.5fr_0.8fr] lg:px-8 lg:py-24">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e9ded1] bg-[#f5eee6] px-3 py-1.5 font-mono text-[12px] font-extrabold uppercase tracking-[0.04em] text-[#273449]">
            <span className="relative flex size-2 shrink-0">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-green-500" />
            </span>
            Fullstack Developer • Former Educator
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            From curious minds to
            <br />
            <span className="text-teal">creative code.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            Hi, I&apos;m <span className="font-bold text-ink">Hanna Arefi</span>
            , a fullstack developer who loves turning ideas into useful,
            easy-to-use applications. With a background in teaching, I bring
            creativity, curiosity, and a people-first perspective to everything
            I build.
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
              The teacher advantage
            </a>
          </div>
        </div>

        <aside className="relative overflow-hidden rounded-2xl border border-[#e4e5df] bg-white p-6 shadow-[0_8px_30px_rgba(32,37,49,0.05)] lg:p-8">
          {/* Decorative quotation mark */}
          <span
            aria-hidden="true"
            className="absolute right-5 top-2 font-serif text-[90px] leading-none text-[#e8f1eb]"
          >
            &ldquo;
          </span>

          <div className="relative">
            <p className="mb-5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#17695d]">
              How I Think
            </p>

            <blockquote className="max-w-sm text-xl font-semibold leading-8 tracking-tight text-[#202531] sm:text-2xl">
              There&apos;s usually more than one way to solve a problem.
              
            </blockquote>

            <div className="my-6 h-1 w-12 rounded-full bg-[#17695d]" />

            <p className="text-[15px] leading-7 text-[#667078]">
              Teaching taught me to look at challenges from different
              perspectives. Development gives me the opportunity to turn those
              ideas into practical solutions.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
