
import {
  Monitor,
  Server,
  Database,
  Brain,
} from "lucide-react";

import { skillGroups } from "@/data/portfolio";

const iconMap = {
  monitor: Monitor,
  server: Server,
  database: Database,
  brain: Brain,
};

const colorStyles = {
  teal: {
    icon: "border-emerald-200 bg-emerald-50 text-teal",
    level: "text-teal",
  },
  orange: {
    icon: "border-orange-200 bg-orange-50 text-orange-600",
    level: "text-orange-600",
  },
  cyan: {
    icon: "border-cyan-200 bg-cyan-50 text-cyan-700",
    level: "text-cyan-700",
  },
  blue: {
    icon: "border-blue-200 bg-blue-50 text-blue-600",
    level: "text-blue-600",
  },
  yellow: {
    icon: "border-yellow-200 bg-yellow-50 text-yellow-600",
    level: "text-yellow-600",
  },
} as const;

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-y border-[#eee6de] bg-white py-12 sm:py-16"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="mb-6 border-b border-[#eee6de] pb-4">
          <p className="mb-1 font-mono text-[12px] font-bold uppercase tracking-[0.12em] text-orange-600">
            Technical inventory
          </p>

          <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#172033] sm:text-[28px]">
            Core Competency Matrix
          </h2>
        </div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => {
            const Icon =
              iconMap[group.icon as keyof typeof iconMap];

            const styles = colorStyles[group.color as keyof typeof colorStyles];

            return (
              <article
                key={group.title}
                className="min-w-0 rounded-[10px] border border-[#e9ded4] bg-[#faf5ef] p-3.5"
              >
                {/* Icon and title */}
                <div className="mb-3 flex items-center gap-2">
                  <span
                    className={`flex size-6 shrink-0 items-center justify-center rounded-[5px] border ${styles.icon}`}
                  >
                    {Icon && (
                      <Icon size={17} strokeWidth={1.8} />
                    )}
                  </span>

                  <h3 className="text-[15px] font-bold leading-tight text-[#172033]">
                    {group.title}
                  </h3>
                </div>

                {/* Group description */}
                <p className="mb-3 min-h-[30px] text-[9px] leading-[1.5] text-[#77716c]">
                  {group.description}
                </p>

                {/* Individual skills */}
                <ul className="space-y-1.5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex min-h-[25px] items-center justify-between gap-2 rounded-[7px] border border-[#eee6de] bg-white px-2 py-1.5"
                    >
                      <span className="min-w-0 text-[11px] leading-tight text-[#263247]">
                        {skill.name}
                      </span>

                      <span
                        className={`shrink-0 text-right font-mono text-[10px] font-bold leading-tight ${styles.level}`}
                      >
                        {skill.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
