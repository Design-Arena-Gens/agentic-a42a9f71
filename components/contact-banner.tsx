import { Mail, MessageSquare } from "lucide-react";

export function ContactBanner() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-4xl px-6 pb-20 pt-12 text-center"
    >
      <div className="rounded-3xl border border-slate-800/70 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-900/80 p-12 shadow-glow">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary">
          <MessageSquare className="h-7 w-7" />
        </div>
        <h2 className="mt-6 text-3xl font-semibold text-slate-100">
          Let&apos;s storyboard your next interface.
        </h2>
        <p className="mt-4 text-base text-slate-400">
          Whether you&apos;re scaling a design system or prototyping a new
          product, I can help bridge vision with shipping velocity.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hello@aria-frontend.dev"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition hover:bg-primary/90"
          >
            <Mail className="h-4 w-4" />
            hello@aria-frontend.dev
          </a>
          <a
            href="https://cal.com/aria-frontend/intro"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-200 transition hover:border-primary/60 hover:text-primary"
          >
            Book a 20-min call
          </a>
        </div>
      </div>
    </section>
  );
}
