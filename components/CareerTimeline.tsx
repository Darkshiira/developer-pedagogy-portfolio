
import SectionHeading from "@/components/SectionHeading";
import { careerEntries } from "@/data/portfolio";

export default function CareerTimeline() {
  return (
    <section
      id="career"
      className="scroll-mt-24 border-y border-line bg-sand/60 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="04 / Professional journey"
          title="Career path: classroom to terminal"
          description="How teaching, technical education and practical development experience have shaped my approach."
        />

        <ol className="relative ml-2 space-y-8 border-l border-teal/40 pl-7">
          {careerEntries.map((entry) => (
            <li key={`${entry.period}-${entry.organisation}`} className="relative">
              <span className="absolute -left-[34px] top-1 size-3 rounded-full border-2 border-teal bg-cream" />

              <p className="text-xs font-bold uppercase tracking-widest text-teal">
                {entry.period}
              </p>

              <h3 className="mt-2 text-lg font-bold">
                {entry.title}
              </h3>

              <p className="mt-1 text-sm font-medium text-muted">
                {entry.organisation}
              </p>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
                {entry.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}