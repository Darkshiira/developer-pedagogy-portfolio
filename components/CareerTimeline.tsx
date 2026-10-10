
import { careerEntries } from "@/data/portfolio";

const colorStyles = {
  orange: {
    line: "bg-orange-500",
    marker: "border-orange-500 text-orange-600",
    badge: "border-orange-200 bg-white text-orange-600",
    meta: "text-[#77716c]",
  },
  teal: {
    line: "bg-teal",
    marker: "border-teal text-teal",
    badge: "border-teal-200 bg-white text-teal",
    meta: "text-[#77716c]",
  },
  green: {
    line: "bg-emerald-500",
    marker: "border-emerald-500 text-emerald-600",
    badge: "border-emerald-200 bg-white text-emerald-700",
    meta: "text-[#77716c]",
  },
} as const;

export default function CareerTimeline() {
  return (
    <section
      id="career"
      className="scroll-mt-24 border-y border-[#eee6de] bg-[#faf5ef] py-12 sm:py-16"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-7 border-b border-[#e9e2da] pb-4">
          <p className="mb-1 font-mono text-[12px] font-bold uppercase tracking-[0.12em] text-teal">
            Evolutionary trajectory
          </p>

          <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#172033] sm:text-[28px]">
            Career Path: Classroom to Terminal
          </h2>
        </div>

        {/* Timeline */}
        <ol className="relative ml-3 space-y-7 border-l border-[#d8cfc4] pl-7 sm:ml-3 sm:space-y-8">
          {careerEntries.map((entry) => {
            const styles =
              colorStyles[
                entry.color as keyof typeof colorStyles
              ] ?? colorStyles.teal;

            return (
              <li
                key={`${entry.period}-${entry.title}`}
                className="relative"
              >
                {/* Timeline marker */}
                <span
                  className={`absolute -left-[35px] top-1 flex size-[15px] items-center justify-center rounded-full border-2 bg-white ${styles.marker}`}
                >
                  <span
                    className={`size-[5px] rounded-full ${styles.line}`}
                  />
                </span>

                {/* Date and metadata */}
                <div className="mb-1.5 flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span
                    className={`rounded-[3px] border px-1.5 py-0.5 font-mono text-[11px] font-bold leading-tight ${styles.badge}`}
                  >
                    {entry.period}
                  </span>

                  <span
                    className={`text-[11px] leading-tight ${styles.meta}`}
                  >
                    {entry.meta}
                  </span>
                </div>

                {/* Role */}
                <h3 className="text-[16px] font-bold leading-snug text-[#243047] sm:text-sm">
                  {entry.title}
                </h3>

                <p className="mt-0.5 text-[12px] font-medium text-[#686765]">
                  {entry.organisation}
                </p>

                {/* Description */}
                <p className="mt-2 max-w-[760px] text-[12px] leading-[1.7] text-[#6c6a66] sm:text-[11px]">
                  {entry.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
