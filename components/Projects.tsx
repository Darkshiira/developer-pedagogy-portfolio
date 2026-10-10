import SectionHeading from "@/components/SectionHeading";
import { Hammer, Code2, Sparkles } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-y border-line bg-sand/60 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Practical solutions"
          title="Featured fullstack projects"
          description="A selection of projects demonstrating problem-solving, technical implementation and thoughtful design."
        />

        <div className="relative mt-8 overflow-hidden rounded-panel border border-line bg-card">
          {/* Decorative background */}
          <div className="pointer-events-none absolute -right-16 -top-20 size-64 rounded-full bg-[#17695d]/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-12 size-64 rounded-full bg-[#e87936]/5 blur-3xl" />

          <div className="relative grid items-center gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:gap-12 lg:p-12">
            {/* Text */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#f2d8bd] bg-[#fff4e8] px-3 py-1.5">
                <span className="size-2 rounded-full bg-[#e87936]" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#a94e1c]">
                  Work in progress
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                Good projects take{" "}
                <span className="text-teal">thought and time.</span>
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
                I'm currently working on new projects to put my fullstack
                skills into practice. This space will soon feature practical
                applications, the ideas behind them, and what I've learned
                along the way.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Learning by building", "Fullstack development", "Coming soon"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line bg-sand px-3 py-1.5 text-xs font-medium text-muted"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Decorative illustration */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative flex size-40 items-center justify-center rounded-[2rem] border border-line bg-sand shadow-sm sm:size-48">
                <div className="absolute inset-3 rounded-[1.5rem] border border-dashed border-[#d9cabb]" />

                <div className="relative flex size-20 items-center justify-center rounded-2xl bg-teal text-white shadow-md sm:size-24">
                  <Code2 size={38} strokeWidth={1.6} />
                </div>

                <div className="absolute -right-3 top-5 flex size-11 items-center justify-center rounded-xl border border-line bg-white text-[#e87936] shadow-sm">
                  <Hammer size={21} />
                </div>

                <div className="absolute -bottom-3 -left-2 flex size-10 items-center justify-center rounded-xl border border-line bg-white text-teal shadow-sm">
                  <Sparkles size={19} />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom status strip */}
          <div className="relative flex flex-wrap items-center justify-between gap-3 border-t border-line bg-sand/70 px-7 py-4 sm:px-10">
            <p className="text-xs text-muted">
              <span className="font-semibold text-ink">
                Next step:
              </span>{" "}
              Turning ideas into working applications.
            </p>

            <span className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider text-teal">
              <span className="size-1.5 rounded-full bg-teal" />
              Building something new
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}