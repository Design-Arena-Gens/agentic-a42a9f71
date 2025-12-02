export function Footer() {
  return (
    <footer className="border-t border-slate-800/70 bg-slate-950/60">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} Aria Chen. Crafted with care.</span>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/aria-frontend"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-slate-200"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/aria-frontend"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-slate-200"
          >
            LinkedIn
          </a>
          <a
            href="https://aria-frontend.medium.com"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-slate-200"
          >
            Writing
          </a>
        </div>
      </div>
    </footer>
  );
}
