import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-[hsl(var(--fg))] text-[hsl(var(--bg))] hover:opacity-90 shadow-[0_10px_30px_-18px_hsl(var(--accent)/0.45)]",
  secondary:
    "bg-[hsl(var(--muted))] text-[hsl(var(--fg))] hover:bg-[hsl(var(--muted-2))] ring-1 ring-[hsl(var(--border))]",
  ghost:
    "bg-transparent text-[hsl(var(--fg))] hover:bg-[hsl(var(--muted))] ring-1 ring-[hsl(var(--border))]",
};

export function Button({
  variant = "primary",
  className,
  children,
  href,
  target,
  rel,
}: {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-colors";

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        className={cn(base, styles[variant], className)}
        target={target ?? (isExternal ? "_blank" : undefined)}
        rel={rel ?? (isExternal ? "noreferrer" : undefined)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={cn(base, styles[variant], className)}>
      {children}
    </button>
  );
}
