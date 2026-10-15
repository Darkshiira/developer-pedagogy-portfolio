import {
  Lightbulb,
  MessagesSquare,
  Users,
  ArrowUpRight,
  WandSparkles,
} from "lucide-react";

const advantages = [
  {
    number: "01",
    label: "CREATIVITY",
    title: "Creative problem-solving",
    description:
      "Teaching often means finding new ways to approach the same challenge. I bring that flexibility and creativity into development, exploring different solutions until something works.",
    takeaway: "Flexible thinking",
    icon: WandSparkles,
    color: "teal",
  },
  {
    number: "02",
    label: "COMMUNICATION",
    title: "Making complex things simple",
    description:
      "I'm used to breaking down complicated ideas into smaller, understandable pieces. That helps when explaining technical decisions, sharing ideas, and working with others.",
    takeaway: "Clear communication",
    icon: MessagesSquare,
    color: "orange",
  },
  {
    number: "03",
    label: "PEOPLE FIRST",
    title: "Understanding different users",
    description:
      "People learn, think, and interact differently. My background has taught me to consider different perspectives and create experiences that are intuitive and accessible.",
    takeaway: "Thoughtful experiences",
    icon: Users,
    color: "cyan",
  },
] as const;

const colorStyles = {
  teal: {
    icon: "border-[#cce7d7] bg-[#e8f5ed] text-[#17695d]",
    label: "text-[#17695d]",
    number: "text-[#b7d7c6]",
    footer: "text-[#17695d]",
    hover: "hover:border-[#b7d7c6]",
  },
  orange: {
    icon: "border-[#f0d8b8] bg-[#fff1df] text-[#c26b25]",
    label: "text-[#c26b25]",
    number: "text-[#e8c9a4]",
    footer: "text-[#c26b25]",
    hover: "hover:border-[#e8c9a4]",
  },
  cyan: {
    icon: "border-[#c7e7ed] bg-[#eaf7fa] text-[#147b91]",
    label: "text-[#147b91]",
    number: "text-[#b5dce5]",
    footer: "text-[#147b91]",
    hover: "hover:border-[#b5dce5]",
  },
} as const;

export default function Advantage() {
  return (
    <section
      id="advantage"
      className="scroll-mt-24 border-b border-[#e9e0d6] bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-10">
        {/* SECTION HEADING */}
        <div className="mb-10 grid gap-6 border-b border-[#e9e2da] pb-8 md:grid-cols-[1.3fr_1fr] md:items-end">
          <div>
            <p className="mb-4 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#c26b25]">
              <Lightbulb size={16} />
              The Teacher Advantage
            </p>

            <h2 className="max-w-[600px] text-3xl font-extrabold leading-[1.15] tracking-[-0.035em] text-[#202531] sm:text-4xl">
              What I bring beyond technical skills.
            </h2>
          </div>

          <p className="max-w-md text-[15px] leading-7 text-[#667078] md:justify-self-end">
            Software development isn&apos;t only about writing code. My experience in
            education has given me practical skills in problem-solving,
            communication, and understanding people.
          </p>
        </div>

        {/* ADVANTAGE CARDS */}
        <div className="grid gap-5 md:grid-cols-3">
          {advantages.map((item) => {
            const Icon = item.icon;
            const styles = colorStyles[item.color];

            return (
              <article
                key={item.number}
                className={`group flex min-w-0 flex-col rounded-2xl border border-[#e9ded4] bg-[#fcf8f3] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${styles.hover}`}
              >
                {/* TOP ROW */}
                <div className="mb-7 flex items-start justify-between">
                  <div
                    className={`flex size-12 items-center justify-center rounded-xl border ${styles.icon}`}
                  >
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <span
                    className={`font-mono text-2xl font-bold ${styles.number}`}
                  >
                    {item.number}
                  </span>
                </div>

                {/* CATEGORY */}
                <p
                  className={`mb-3 font-mono text-[11px] font-extrabold uppercase tracking-[0.14em] ${styles.label}`}
                >
                  {item.label}
                </p>

                {/* TITLE */}
                <h3 className="text-xl font-extrabold leading-snug tracking-tight text-[#202531]">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-4 flex-1 text-[14px] leading-7 text-[#667078]">
                  {item.description}
                </p>

                {/* FOOTER */}
                <div className="mt-8 flex items-center justify-between border-t border-[#e9e2da] pt-4">
                  <span className={`text-[12px] font-bold ${styles.footer}`}>
                    {item.takeaway}
                  </span>

                  <ArrowUpRight
                    size={17}
                    className={`opacity-50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100 ${styles.footer}`}
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
