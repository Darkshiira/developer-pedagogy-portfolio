
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const featuredProject = projects.find(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section
      id="projects"
      className="scroll-mt-24 border-y border-line bg-sand/60 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="02 / Practical solutions"
          title="Featured fullstack projects"
          description="A selection of projects demonstrating problem-solving, technical implementation and thoughtful design."
        />

        {featuredProject && (
          <div className="grid overflow-hidden rounded-panel border border-line bg-card lg:grid-cols-2">
            <div className="p-6 sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-widest text-teal">
                Featured project
              </p>

              <h3 className="mt-4 text-2xl font-bold tracking-tight">
                {featuredProject.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-muted">
                {featuredProject.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {featuredProject.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full bg-sand px-3 py-1 text-[10px] font-medium"
                  >
                    {technology}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-4 text-sm font-semibold">
                {featuredProject.demoUrl && (
                  <a
                    href={featuredProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal hover:underline"
                  >
                    View project ↗
                  </a>
                )}

                {featuredProject.githubUrl && (
                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-teal"
                  >
                    GitHub repository ↗
                  </a>
                )}
              </div>
            </div>

            <div className="flex min-h-64 items-center justify-center border-t border-line bg-[#eae3d9] p-6 lg:border-l lg:border-t-0">
              <div className="w-full max-w-md rounded-xl border border-line bg-white p-4 shadow-sm">
                <div className="mb-5 flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-red-300" />
                  <span className="size-2.5 rounded-full bg-amber-300" />
                  <span className="size-2.5 rounded-full bg-emerald-300" />
                </div>

                <p className="text-xs font-bold">
                  Project interface preview
                </p>

                <div className="mt-4 space-y-3">
                  <div className="h-3 w-3/4 rounded bg-sand" />
                  <div className="h-3 w-full rounded bg-sand" />
                  <div className="h-3 w-1/2 rounded bg-sand" />
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="h-16 rounded-lg border border-line bg-cream" />
                    <div className="h-16 rounded-lg border border-line bg-cream" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {otherProjects.length > 0 && (
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {otherProjects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}