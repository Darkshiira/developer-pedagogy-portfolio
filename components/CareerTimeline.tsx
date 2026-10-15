import { Route, ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import { careerEntries } from "@/data/portfolio";

const colorStyles = {
  orange: {
    line: "bg-[#c26b25]",
    marker: "border-[#c26b25]",
    badge: "border-[#f0d8b8] bg-[#fff1df] text-[#a65a1f]",
    hover: "hover:border-[#e8c9a4]",
  },
  teal: {
    line: "bg-[#17695d]",
    marker: "border-[#17695d]",
    badge: "border-[#cce7d7] bg-[#e8f5ed] text-[#17695d]",
    hover: "hover:border-[#b7d7c6]",
  },
  green: {
    line: "bg-[#20a875]",
    marker: "border-[#20a875]",
    badge: "border-[#c8e8d3] bg-[#eaf7ed] text-[#246847]",
    hover: "hover:border-[#b7d7c6]",
  },
  blue: {
  line: "bg-[#426db5]",
  marker: "border-[#426db5]",
  badge: "border-[#d3e1f5] bg-[#edf4ff] text-[#426db5]",
  hover: "hover:border-[#c4d6ef]",
},
} as const;

export default function CareerTimeline() {
  return (
    <section
      id="career"
      className="scroll-mt-24 border-y border-[#e9e0d6] bg-[#faf5ef] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-10">
        {/* SECTION HEADING */}
        <div className="mb-10 grid gap-5 border-b border-[#e9e2da] pb-8 md:grid-cols-[1.3fr_1fr] md:items-end">
          <div>
            <p className="mb-4 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#c26b25]">
              <Route size={16} />
              From Then to Now
            </p>

            <h2 className="max-w-[600px] text-3xl font-extrabold leading-[1.15] tracking-[-0.035em] text-[#202531] sm:text-4xl">
              The journey so far.
            </h2>
          </div>

          <p className="max-w-md text-[15px] leading-7 text-[#667078] md:justify-self-end">
            From classrooms and outdoor adventures to web development, each
            experience has shaped the way I think, create, and solve problems.
          </p>
        </div>

        {/* TIMELINE */}
        <ol className="relative ml-3 space-y-6 border-l-2 border-[#ded5cb] pl-7 sm:ml-5 sm:space-y-7 sm:pl-10">
          {careerEntries.map((entry, index) => {
            const styles =
              colorStyles[entry.color as keyof typeof colorStyles] ??
              colorStyles.teal;

            const isLast = index === careerEntries.length - 1;

            return (
              <li key={`${entry.period}-${entry.title}`} className="relative">
                {/* TIMELINE MARKER */}
                <span
                  className={`absolute -left-[37px] top-6 flex size-[17px] items-center justify-center rounded-full border-[3px] bg-white sm:-left-[49px] ${styles.marker}`}
                >
                  <span className={`size-[5px] rounded-full ${styles.line}`} />
                </span>

                {/* TIMELINE CARD */}
                <article
                  className={`group rounded-2xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-7 ${
                    isLast
                      ? "border-[#b7d7c6] bg-[#f0f8f2]"
                      : `border-[#e9ded4] bg-white ${styles.hover}`
                  }`}
                >
                  {/* DATE AND META */}
                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-lg border px-3 py-1.5 font-mono text-[11px] font-bold ${styles.badge}`}
                    >
                      {entry.period}
                    </span>

                    <span className="text-[12px] font-medium text-[#778087]">
                      {entry.meta}
                    </span>
                  </div>

                  {/* ROLE */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-extrabold tracking-tight text-[#202531] sm:text-xl">
                        {entry.title}
                      </h3>

                      <p className="mt-1 text-[13px] font-semibold text-[#667078]">
                        {entry.organisation}
                      </p>
                    </div>

                    {isLast && (
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#dcefe2] text-[#17695d]">
                        <BriefcaseBusiness size={20} />
                      </span>
                    )}
                  </div>

                  {/* DESCRIPTION */}
                  <p className="mt-4 max-w-[850px] text-[14px] leading-7 text-[#667078]">
                    {entry.description}
                  </p>

                  {/* FINAL ENTRY LINK */}
                  {isLast && (
                    <a
                      href="#contact"
                      className="mt-5 inline-flex items-center gap-2 text-[13px] font-bold text-[#17695d] transition-colors hover:text-[#105347]"
                    >
                      Let&apos;s work together
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
