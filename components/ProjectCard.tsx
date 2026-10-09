
import type { Project } from "@/types/portfolio";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-card border border-line bg-card p-5">
      <p className="text-[10px] font-bold uppercase tracking-widest text-teal">
        {project.category}
      </p>

      <h3 className="mt-3 text-lg font-bold tracking-tight">
        {project.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-muted">
        {project.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-full bg-sand px-2.5 py-1 text-[10px] font-medium"
          >
            {technology}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-4 pt-6 text-xs font-semibold">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal hover:underline"
          >
            Live demo ↗
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-teal"
          >
            GitHub ↗
          </a>
        )}
      </div>
    </article>
  );
}