import { ArrowUpRight, Code2, Heart } from "lucide-react";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-y border-[#e9e0d6] bg-[#fcf8f3] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1300px] px-5 sm:px-8 lg:px-10">
        {/* SECTION HEADING */}
        <div className="mb-10 grid gap-5 border-b border-[#e9e2da] pb-8 md:grid-cols-[1.3fr_1fr] md:items-end">
          <div>
            <p className="mb-4 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#c26b25]">
              <Code2 size={16} />
              Featured Work
            </p>

            <h2 className="max-w-[650px] text-3xl font-extrabold leading-[1.15] tracking-[-0.035em] text-[#202531] sm:text-4xl lg:text-[44px]">
              Ideas brought to life.
            </h2>
          </div>

          <p className="max-w-md text-[15px] leading-7 text-[#667078] md:justify-self-end">
            A selection of projects where I combine creativity, problem-solving,
            and development to build useful and engaging applications.
          </p>
        </div>

        {/* PROJECT CARDS */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* PERSONAL NOTE */}
        <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-[#e4e8dc] bg-[#f0f6ed] p-6 sm:flex-row sm:items-center sm:p-7">
          <div className="flex items-start gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#17695d] shadow-sm">
              <Heart size={21} />
            </span>

            <div>
              <h3 className="text-[16px] font-extrabold text-[#202531]">
                Built with curiosity and care.
              </h3>

              <p className="mt-2 max-w-2xl text-[13px] leading-6 text-[#667078]">
                These projects bring together two things I enjoy: creating
                useful applications and finding playful ways to support
                learning. They&apos;re also opportunities for me to keep
                exploring new ideas and improving my development skills.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/Darkshiira?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-[#cce7d7] bg-white px-4 py-3 text-[13px] font-bold text-[#17695d] transition-colors hover:bg-[#e8f5ed]"
          >
            {/* <Github size={17} /> */}
            More on GitHub
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
