
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";

import type { Project } from "@/types/portfolio";

type ProjectCardProps = {
  project: Project;
  index: number;
};

const projectThemes = [
  {
    background:
      "bg-gradient-to-br from-[#e5f4df] via-[#f5f8e9] to-[#ffe8c9]",
    accent: "text-[#17695d]",
    tag: "border-[#cce7d7] bg-[#edf8ed] text-[#17695d]",
    button: "bg-[#17695d] hover:bg-[#105347]",
    label: "Learning through play",
    screenshot: "/images/projects/Matteaventyret-screenshot.png",
  },
  {
    background:
      "bg-gradient-to-br from-[#e4f2e9] via-[#f2effb] to-[#e9e3fa]",
    accent: "text-[#6554a0]",
    tag: "border-[#e0d8f2] bg-[#f4f0fc] text-[#6554a0]",
    button: "bg-[#6554a0] hover:bg-[#514185]",
    label: "Learning step by step",
    screenshot: "/images/projects/svenskasparet-screenshot.png",
  },
];

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  const theme = projectThemes[index % projectThemes.length];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#e9ded4] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* PROJECT VISUAL */}
      <div
        className={`relative overflow-hidden p-5 sm:p-8 ${theme.background}`}
      >
        {/* Decorative background circles */}
        <div className="pointer-events-none absolute -right-12 -top-12 size-48 rounded-full border-[24px] border-white/30" />
        <div className="pointer-events-none absolute -bottom-20 -left-12 size-56 rounded-full border-[28px] border-white/30" />

        {/* Project label */}
        <div className="relative z-10 mb-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-3 py-1.5 text-[11px] font-bold text-[#34434a] shadow-sm backdrop-blur-sm">
            <Sparkles size={13} />
            {theme.label}
          </span>
        </div>

        {/* BROWSER MOCKUP */}
        <div className="relative z-10 overflow-hidden rounded-xl border border-white/80 bg-white shadow-[0_15px_40px_rgba(32,37,49,0.15)] transition-transform duration-500 group-hover:-translate-y-1">

          {/* Browser toolbar */}
          <div className="flex h-9 items-center gap-3 border-b border-[#e9e2da] bg-[#f8f8f8] px-3 sm:h-10 sm:px-4">

            {/* Browser dots */}
            <div className="flex shrink-0 items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-[#ffb4a9]" />
              <span className="size-2.5 rounded-full bg-[#ffe09a]" />
              <span className="size-2.5 rounded-full bg-[#a9dcb9]" />
            </div>

            {/* Address bar */}
            <div className="mx-auto flex h-5 w-2/3 max-w-[260px] items-center justify-center rounded-md border border-[#e9e9e9] bg-white px-2">
              <span className="truncate text-[9px] text-[#8a8f94]">
                {project.title}
              </span>
            </div>

            {/* Spacer for balance */}
            <div className="w-[40px] shrink-0" />
          </div>

          {/* WEBSITE SCREENSHOT */}
          <div className="relative aspect-[16/10] overflow-hidden bg-white">
            <Image
              src={theme.screenshot}
              alt={`Screenshot of the ${project.title} website`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>

      {/* PROJECT DETAILS */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">

        {/* Category */}
        <p
          className={`mb-3 text-[11px] font-extrabold uppercase tracking-[0.14em] ${theme.accent}`}
        >
          {project.category}
        </p>

        {/* Title */}
        <h3 className="text-2xl font-extrabold tracking-tight text-[#202531] sm:text-[28px]">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-4 flex-1 text-[14px] leading-7 text-[#667078]">
          {project.description}
        </p>

        {/* TECHNOLOGIES */}
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold ${theme.tag}`}
            >
              {technology}
            </li>
          ))}
        </ul>

        {/* ACTIONS */}
        <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-[#eee6de] pt-6">

          {/* Live demo */}
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-[13px] font-bold text-white transition-all hover:shadow-md ${theme.button}`}
            >
              Explore project
              <ArrowUpRight size={17} />
            </a>
          ) : (
            <span className="inline-flex items-center rounded-xl border border-[#e9ded4] bg-[#faf5ef] px-5 py-3 text-[13px] font-semibold text-[#667078]">
              Live link coming soon
            </span>
          )}

          {/* GitHub */}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#e9ded4] px-4 py-3 text-[13px] font-bold text-[#34434a] transition-colors hover:border-[#17695d] hover:text-[#17695d]"
            >
              {/* <Github size={17} /> */}
              View code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
