import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/cn";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/60 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-2 text-slate-200">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-lg font-semibold text-primary">
            AC
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-medium uppercase tracking-[0.28em] text-slate-400">
              Aria Chen
            </span>
            <span className="text-xs font-medium text-slate-500">
              Frontend / Design Systems
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-400 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "relative transition-colors duration-300 hover:text-slate-100"
              )}
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-primary to-accent transition-transform duration-300 ease-out hover:scale-x-100" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition hover:bg-primary/90 md:inline-flex"
          >
            Let&apos;s Connect
          </a>
        </div>
      </div>
    </header>
  );
}
