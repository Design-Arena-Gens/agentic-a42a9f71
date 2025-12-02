"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Layers } from "lucide-react";

const frameworks = {
  react: {
    title: "React Impact Highlights",
    bullets: [
      "Composed streaming-ready experiences with App Router, React Server Components, and Suspense orchestration.",
      "Built first-class design tokens and story-driven documentation that accelerated onboarding for new engineers.",
      "Partnered with product squads to prototype experiments in Framer Motion and deploy via feature flags."
    ]
  },
  angular: {
    title: "Angular Platform Expertise",
    bullets: [
      "Migrated enterprise dashboards from AngularJS to Angular 16 with standalone components and RxJS pipelines.",
      "Maintained Nx monorepo with shared domain libraries, schematics, and end-to-end Cypress automation.",
      "Delivered accessible component APIs with CDK primitives, harnesses, and Storybook-powered test benches."
    ]
  }
};

type FrameworkKey = keyof typeof frameworks;

export function FrameworkSwitcher() {
  const [active, setActive] = useState<FrameworkKey>("react");

  return (
    <section
      id="process"
      className="mx-auto mt-8 max-w-5xl rounded-3xl border border-slate-800/70 bg-slate-900/30 px-8 py-10"
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.38em] text-slate-500">
            Dual-Framework Flow
          </span>
          <h2 className="mt-2 text-3xl font-semibold text-slate-100">
            React speed, Angular rigor — unified delivery.
          </h2>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/40 p-1">
          {(["react", "angular"] as FrameworkKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                active === key
                  ? "bg-primary/90 text-primary-foreground shadow-glow"
                  : "text-slate-300 hover:text-slate-100"
              }`}
              type="button"
            >
              {key === "react" ? (
                <Code2 className="h-4 w-4" />
              ) : (
                <Layers className="h-4 w-4" />
              )}
              {key === "react" ? "React" : "Angular"}
            </button>
          ))}
        </div>
      </div>
      <div className="relative mt-8 min-h-[220px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-slate-100">
              {frameworks[active].title}
            </h3>
            <ul className="grid gap-3 text-base text-slate-300 md:grid-cols-3">
              {frameworks[active].bullets.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-slate-800/70 bg-slate-900/50 p-4 text-sm text-slate-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
