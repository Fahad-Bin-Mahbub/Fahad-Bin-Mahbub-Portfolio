"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { person } from "@/lib/data";

const links = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "Resume", href: "/resume" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={cn(
          "relative flex items-center justify-between gap-4 rounded-full border border-border/40 bg-background/80 px-6 py-3 shadow-sm backdrop-blur-md transition-all duration-300 w-full max-w-3xl",
          scrolled && "shadow-md border-border/60 bg-background/90"
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-sm tracking-tight shrink-0"
        >
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          Fahad BM
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  active ? "text-primary font-semibold" : "text-muted-foreground"
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
            <div className="hidden sm:block">
                 <ThemeToggle />
            </div>
          
          <button
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-input bg-background transition-colors hover:bg-muted"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
            <div className="absolute top-full left-0 right-0 mt-2 rounded-xl border border-border/50 bg-background/95 p-4 shadow-xl backdrop-blur-md md:hidden flex flex-col gap-2 animate-in slide-in-from-top-2 fade-in">
                {links.map((l) => (
                <Link
                    key={l.href}
                    href={l.href}
                    className="flex items-center rounded-lg px-4 py-3 text-sm font-medium hover:bg-muted/50 transition-colors"
                    onClick={() => setOpen(false)}
                >
                    {l.label}
                </Link>
                ))}
                <div className="border-t border-border/50 pt-2 mt-1">
                     <div className="flex items-center justify-between px-4 py-2">
                        <span className="text-sm font-medium text-muted-foreground">Theme</span>
                        <ThemeToggle />
                     </div>
                </div>
            </div>
        )}
      </nav>
    </header>
  );
}
