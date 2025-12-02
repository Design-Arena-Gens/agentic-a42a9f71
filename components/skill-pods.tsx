"use client";

import { motion } from "framer-motion";

const skills = [
  {
    title: "React Architecture",
    description:
      "Next.js App Router, TanStack Query, Zustand, React Hook Form, performance profiling, suspense orchestration.",
    level: "Expert"
  },
  {
    title: "Angular Craft",
    description:
      "Standalone components, Nx monorepos, RxJS state management, schematics, CDK, testing with Jest + Cypress.",
    level: "Advanced"
  },
  {
    title: "Experience Strategy",
    description:
      "Design system governance, accessibility standards (WCAG 2.2), user research synthesis, data-driven iteration.",
    level: "Advanced"
  },
  {
    title: "Delivery Ops",
    description:
      "CI/CD pipelines, visual regression automation, feature flag experimentation, performance budgets.",
    level: "Advanced"
  }
];

export function SkillPods() {
  return (
    <section className="mx-auto mt-4 max-w-5xl px-6">
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((skill, index) => (
          <motion.article
            key={skill.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.08 }}
            className="glass h-full rounded-3xl p-6"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold text-slate-100">
                {skill.title}
              </h3>
              <span className="rounded-full border border-slate-700/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                {skill.level}
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-300">{skill.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
