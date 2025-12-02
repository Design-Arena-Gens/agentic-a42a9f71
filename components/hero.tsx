"use client";
 
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-16">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1.2fr,0.8fr] md:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800/70 bg-slate-900/40 px-4 py-2 text-sm text-slate-400">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>
              Frontend Developer • React advocate • Angular design systems
            </span>
          </div>
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl font-semibold leading-tight text-slate-100 sm:text-5xl"
            >
              Crafting interfaces that balance velocity and polish across React
              &amp; Angular ecosystems.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-xl text-lg text-slate-400"
            >
              Hi, I&apos;m Aria Chen. For the past three years I&apos;ve paired
              component-scale craftsmanship with systems thinking to ship user
              experiences that teams can sustain. From greenfield React apps to
              modular Angular platforms, I thrive where product, design, and
              engineering converge.
            </motion.p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow-glow transition hover:bg-primary/90"
            >
              View Case Studies
            </Link>
            <a
              href="#contact"
              className="rounded-full border border-slate-700/70 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-200 transition hover:border-primary/60 hover:text-primary"
            >
              Request Resume
            </a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center rounded-3xl border border-slate-800/70 bg-slate-900/40 p-10"
        >
          <div className="absolute inset-0 rounded-3xl border border-primary/10 blur-3xl" />
          <div className="relative grid gap-6">
            <div className="glass rounded-2xl p-6">
              <span className="text-xs uppercase tracking-[0.28em] text-primary">
                Craft at scale
              </span>
              <h3 className="mt-3 text-lg font-semibold text-slate-50">
                React Product Pods
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Created resilient atomic components, improved DX with Vite-based
                story playgrounds, and implemented visual regression tracking.
              </p>
            </div>
            <div className="glass rounded-2xl p-6">
              <span className="text-xs uppercase tracking-[0.28em] text-accent">
                Design Systems
              </span>
              <h3 className="mt-3 text-lg font-semibold text-slate-50">
                Angular Experience Platform
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Shipped Nx workspace bridging Angular 16 and federated React
                widgets, enabling design parity across two SPA families.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
