import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export function ProjectsGrid() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl space-y-12 px-6 py-16 md:space-y-16"
    >
      <div className="space-y-4">
        <span className="text-xs font-semibold uppercase tracking-[0.38em] text-slate-500">
          Featured Work
        </span>
        <h2 className="text-3xl font-semibold text-slate-100 sm:text-4xl">
          Case studies that blend React iteration speed with Angular platform
          depth.
        </h2>
        <p className="max-w-3xl text-lg text-slate-400">
          From product-market-fit sprints to global releases, I translate
          complex requirements into maintainable frontends, while keeping UX
          grounded in outcomes.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/30 p-8 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
          >
            <div className="flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                {project.year}
              </span>
              <h3 className="text-2xl font-semibold text-slate-100">
                {project.title}
              </h3>
              <p className="text-sm text-slate-300">{project.description}</p>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <ul className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-slate-700/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-400"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-slate-400">{project.impact}</p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition group-hover:gap-3"
            >
              View project <ArrowUpRight className="h-4 w-4" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
