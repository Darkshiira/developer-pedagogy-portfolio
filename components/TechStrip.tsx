
import { technologies } from "@/data/portfolio";

export default function TechStrip() {
  return (
    <div className="border-b border-line bg-white/40">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-3 px-5 py-5 sm:px-6 lg:px-8">
        <span className="mr-2 text-[10px] font-bold uppercase tracking-widest text-muted">
          Core toolkit
        </span>

        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-line bg-white px-3 py-1 text-[11px] font-medium"
          >
            {technology}
          </span>
        ))}
      </div>
    </div>
  );
}