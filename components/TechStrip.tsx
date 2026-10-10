
import { technologies } from "@/data/portfolio";

const colorClasses = {
  teal: "bg-teal",
  blue: "bg-blue-500",
  orange: "bg-orange-500",
} as const;

export default function TechStrip() {
  return (
    <section className="border-b border-[#e9ded1] bg-[#fcf8f3]">
      <div className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-2 px-5 py-3 sm:px-6 lg:px-8">
        <span className="mr-2 shrink-0 font-mono text-[12px] font-extrabold uppercase tracking-[0.12em] text-[#5e5d5a]">
          Core toolkit:
        </span>

        {technologies.map((technology) => (
          <span
            key={technology.name}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#e9ded1] bg-white px-2.5 py-1 font-mono text-[11px] font-medium leading-none text-[#273449]"
          >
            <span
              className={`size-1.5 shrink-0 rounded-full ${colorClasses[technology.color as keyof typeof colorClasses]}`}
            />

            {technology.name}
          </span>
        ))}
      </div>
    </section>
  );
}
