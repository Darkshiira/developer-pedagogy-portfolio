
import {
  Workflow,
  Accessibility,
  MessagesSquare,
  CheckCircle,
  Users,
  Lightbulb,
} from "lucide-react";

import { advantages } from "@/data/portfolio";

const iconMap = {
  workflow: Workflow,
  accessibility: Accessibility,
  "messages-square": MessagesSquare,
};

const footerIconMap = {
  "check-circle": CheckCircle,
  users: Users,
};

const colorStyles = {
  teal: {
    icon: "border-emerald-200 bg-emerald-50 text-teal",
    label: "text-teal",
    footer: "text-teal",
  },
  orange: {
    icon: "border-amber-200 bg-amber-50 text-orange-600",
    label: "text-orange-600",
    footer: "text-orange-600",
  },
  cyan: {
    icon: "border-cyan-200 bg-cyan-50 text-cyan-700",
    label: "text-cyan-700",
    footer: "text-cyan-700",
  },
} as const;

export default function Advantage() {
  return (
    <section
      id="advantage"
      className="scroll-mt-24 bg-white py-12 sm:py-16"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-6 grid gap-4 border-b border-[#e9e2da] pb-5 md:grid-cols-[1.65fr_1fr] md:items-center">
          <div>
            <p className="mb-1 flex items-center gap-1.5 font-mono text-[12px] font-bold uppercase tracking-[0.12em] text-orange-600">
              <Lightbulb size={14} />
              A Different perspective · Real-world experience
            </p>

            <h2 className="max-w-[540px] text-2xl font-bold leading-[1.15] tracking-tight text-[#172033] sm:text-[28px]">
              The Advantages of being an educator in Software Engineering
            </h2>
          </div>

          <p className="max-w-md text-xs leading-[1.65] text-[#686765] md:justify-self-end">
            My teaching experience has helped me develop skills that I can bring to software development, from explaining complex ideas to understanding different users' needs.
          </p>
        </div>

        {/* Advantage cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {advantages.map((item) => {
            const Icon =
              iconMap[item.icon as keyof typeof iconMap];

            const FooterIcon =
              footerIconMap[
                item.footerIcon as keyof typeof footerIconMap
              ];

            const styles =
              colorStyles[item.color as keyof typeof colorStyles] ??
              colorStyles.teal;

            return (
              <article
                key={item.number}
                className="flex min-w-0 flex-col rounded-[10px] border border-[#e9ded4] bg-[#faf5ef] p-4 transition-transform duration-200 hover:-translate-y-1 sm:p-[15px]"
              >
                {/* Icon tile */}
                <div
                  className={`mb-4 flex size-[31px] items-center justify-center rounded-[7px] border ${styles.icon}`}
                >
                  {Icon && <Icon size={19} strokeWidth={1.8} />}
                </div>

                {/* Category */}
                <p
                  className={`mb-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.08em] ${styles.label}`}
                >
                  {item.label}
                </p>

                {/* Title */}
                <h3 className="text-[15px] font-bold leading-[1.4] tracking-tight text-[#172033]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 flex-1 text-[12px] leading-[1.65] text-[#62615f]">
                  {item.description}
                </p>

                {/* Footer */}
                <div className="mt-4 flex items-center justify-between gap-2 border-t border-[#eee5db] pt-3">
                  <span
                    className={`text-[11px] leading-tight ${styles.footer}`}
                  >
                    {item.takeaway}
                  </span>

                  {FooterIcon && (
                    <FooterIcon
                      size={12}
                      strokeWidth={1.8}
                      className={`shrink-0 ${styles.footer}`}
                    />
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
