import { Briefcase, Compass, Rocket } from "lucide-react";

const experience = [
  {
    role: "Senior Frontend Engineer",
    company: "Pulse Analytics",
    period: "2023 — Present",
    summary:
      "Owns the React platform for care-team workflows, leads Angular wrappers for design system parity, and coaches 6 engineers on accessibility and testing culture.",
    icon: Rocket
  },
  {
    role: "Frontend Engineer",
    company: "Astra Learning",
    period: "2021 — 2023",
    summary:
      "Shipped adaptive dashboards with Angular and Nx, introduced shared React micro-frontends, and delivered 30+ UI experiments with data-backed insights.",
    icon: Compass
  },
  {
    role: "Associate Developer",
    company: "Freelance / Early Stage",
    period: "2020 — 2021",
    summary:
      "Partnered with founders to prototype investor demos in React, and implemented launch-ready Angular portals for seed-stage clients.",
    icon: Briefcase
  }
];

export function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-5xl space-y-12 px-6 py-16 md:space-y-16"
    >
      <div className="space-y-4">
        <span className="text-xs font-semibold uppercase tracking-[0.38em] text-slate-500">
          Experience
        </span>
        <h2 className="text-3xl font-semibold text-slate-100 sm:text-4xl">
          Three years of shipping resilient UI systems with cross-functional
          teams.
        </h2>
        <p className="max-w-3xl text-lg text-slate-400">
          I bring deep empathy for designers, a bias for automated quality
          checks, and the curiosity to keep iterating on developer experience.
        </p>
      </div>
      <ol className="relative border-l border-slate-800/70 pl-10">
        {experience.map((item, index) => {
          const Icon = item.icon;
          return (
            <li key={item.role} className="relative pb-12 last:pb-0">
              <div className="absolute -left-[43px] flex h-10 w-10 items-center justify-center rounded-full border border-primary/50 bg-slate-900/80 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div className="glass rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-100">
                      {item.role}
                    </h3>
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
                      {item.company}
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-slate-400">
                    {item.period}
                  </span>
                </div>
                <p className="mt-4 text-sm text-slate-300">{item.summary}</p>
                {index < experience.length - 1 && (
                  <div className="absolute left-[-1.35rem] top-full h-12 border-l border-dashed border-slate-800/70" />
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
