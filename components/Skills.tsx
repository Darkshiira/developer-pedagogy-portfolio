
import SectionHeading from "@/components/SectionHeading";
import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="03 / Technical inventory"
          title="Core competency matrix"
          description="Technical foundations and complementary strengths."
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-card border border-line bg-card p-5"
            >
              <h3 className="border-b border-line pb-4 text-base font-bold">
                {group.title}
              </h3>

              <ul className="mt-4 space-y-4">
                {group.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-start justify-between gap-3 text-xs"
                  >
                    <span>{skill.name}</span>

                    <span className="shrink-0 rounded-full bg-sand px-2 py-1 text-[10px] text-muted">
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}