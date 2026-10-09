
import SectionHeading from "@/components/SectionHeading";

const advantages = [
  {
    number: "01",
    label: "Systems thinking",
    title: "Systems Thinking & Clear Architecture",
    description:
      "Teaching involves breaking complex subjects into manageable pieces. The same approach helps make software easier to understand, build and maintain.",
  },
  {
    number: "02",
    label: "Human-centred design",
    title: "Empathy-Driven UX & Deep Accessibility",
    description:
      "Understanding different learning needs encourages thoughtful interfaces, clearer workflows and digital experiences that work for more people.",
  },
  {
    number: "03",
    label: "Collaboration",
    title: "Resilience, Mentorship & Pacing",
    description:
      "Planning, adapting and explaining ideas clearly are useful when solving problems, working with colleagues and improving software over time.",
  },
];

export default function Advantage() {
  return (
    <section id="advantage" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="01 / Professional foundation"
          title="The educator advantage in software engineering"
          description="The skills developed in a classroom can be valuable when building software for real people."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {advantages.map((item) => (
            <article
              key={item.number}
              className="rounded-card border border-line bg-card p-6 transition-transform duration-200 hover:-translate-y-1"
            >
              <p className="text-xs font-bold text-teal">
                {item.number} / {item.label}
              </p>

              <h3 className="mt-5 text-lg font-bold tracking-tight">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}