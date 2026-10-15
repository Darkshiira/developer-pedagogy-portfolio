
import {
  Monitor,
  Server,
  Database,
  Brain,
  Code2,
} from "lucide-react";

import { skillGroups } from "@/data/portfolio";

const iconMap = {
  monitor: Monitor,
  server: Server,
  database: Database,
  brain: Brain,
};

const levelWidths: Record<string, number> = {
  Strong: 90,
  Confident: 85,
  Experienced: 85,
  "Professional use": 85,
  Proficient: 75,
  "Used in projects": 70,
  "Working knowledge": 55,
  "Some experience": 40,
  "Basic experience": 35,
  Beginner: 20,
};

const colorStyles = {
  teal: {
    icon: "border-[#cce7d7] bg-[#e8f5ed] text-[#17695d]",
    level: "text-[#17695d]",
    bar: "bg-[#17695d]",
    hover: "hover:border-[#b7d7c6]",
  },
  orange: {
    icon: "border-[#f0d8b8] bg-[#fff1df] text-[#c26b25]",
    level: "text-[#c26b25]",
    bar: "bg-[#c26b25]",
    hover: "hover:border-[#e8c9a4]",
  },
  cyan: {
    icon: "border-[#c7e7ed] bg-[#eaf7fa] text-[#147b91]",
    level: "text-[#147b91]",
    bar: "bg-[#147b91]",
    hover: "hover:border-[#b5dce5]",
  },
  blue: {
    icon: "border-[#d3e1f5] bg-[#edf4ff] text-[#426db5]",
    level: "text-[#426db5]",
    bar: "bg-[#426db5]",
    hover: "hover:border-[#c4d6ef]",
  },
  yellow: {
    icon: "border-[#f0e3b8] bg-[#fff9df] text-[#a98226]",
    level: "text-[#a98226]",
    bar: "bg-[#a98226]",
    hover: "hover:border-[#e8dba4]",
  },
} as const;

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-y border-[#e9e0d6] bg-[#fcf8f3] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-10">

        {/* SECTION HEADING */}
        <div className="mb-10 grid gap-5 border-b border-[#e9e2da] pb-8 md:grid-cols-[1.3fr_1fr] md:items-end">

          <div>
            <p className="mb-4 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#c26b25]">
              <Code2 size={16} />
              Technical Toolkit
            </p>

            <h2 className="max-w-[600px] text-3xl font-extrabold leading-[1.15] tracking-[-0.035em] text-[#202531] sm:text-4xl">
              The skills I bring to the table.
            </h2>
          </div>

          <p className="max-w-md text-[15px] leading-7 text-[#667078] md:justify-self-end">
            From frontend interfaces to backend logic, these
            are the technologies I use to turn ideas into
            working applications.
          </p>
        </div>

        {/* SKILL CARDS */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => {
            const Icon =
              iconMap[group.icon as keyof typeof iconMap];

            const styles =
              colorStyles[group.color as keyof typeof colorStyles] ??
              colorStyles.teal;

            return (
              <article
                key={group.title}
                className={`group flex min-w-0 flex-col rounded-2xl border border-[#e9ded4] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6 ${styles.hover}`}
              >

                {/* ICON */}
                <div
                  className={`mb-5 flex size-12 items-center justify-center rounded-xl border ${styles.icon}`}
                >
                  {Icon && (
                    <Icon size={24} strokeWidth={1.8} />
                  )}
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-extrabold tracking-tight text-[#202531]">
                  {group.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-2 min-h-[48px] text-[13px] leading-6 text-[#667078]">
                  {group.description}
                </p>

                {/* DIVIDER */}
                <div className="my-5 h-px bg-[#eee6de]" />

                {/* SKILLS WITH PROGRESS BARS */}
                <ul className="space-y-5">
                  {group.skills.map((skill) => {
                    const level =
                      levelWidths[skill.level] ?? 40;

                    return (
                      <li
                        key={skill.name}
                        className="space-y-2"
                      >
                        {/* SKILL NAME AND LEVEL */}
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[13px] font-semibold leading-tight text-[#34434a]">
                            {skill.name}
                          </span>

                          <span
                            className={`shrink-0 text-right font-mono text-[10px] font-semibold leading-tight ${styles.level}`}
                          >
                            {skill.level}
                          </span>
                        </div>

                        {/* PROGRESS BAR */}
                        <div
                          className="h-[6px] w-full overflow-hidden rounded-full bg-[#edf0ec]"
                          role="img"
                          aria-label={`${skill.name}: ${skill.level}`}
                        >
                          <div
                            className={`h-full rounded-full ${styles.bar}`}
                            style={{
                              width: `${level}%`,
                            }}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </article>
            );
          })}
        </div>

        {/* BOTTOM NOTE */}
        <p className="mt-8 text-center text-[13px] leading-6 text-[#778087]">
          Always curious, always learning, and always looking
          for new things to build.
        </p>
      </div>
    </section>
  );
}
