"use client";

import { cn } from "@/lib/utils";

/**
 * Fixed background with a very subtle, static academic texture.
 */
export function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 bg-background">
      {/* Subtle Grid */}
      <div
        className={cn(
          "absolute inset-0 opacity-[0.03] dark:opacity-[0.05]",
          "[background-image:linear-gradient(to_right,hsl(var(--foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground))_1px,transparent_1px)]",
          "[background-size:40px_40px]"
        )}
      />
    </div>
  );
}
