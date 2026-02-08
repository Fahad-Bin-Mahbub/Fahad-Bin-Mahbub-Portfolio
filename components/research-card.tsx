"use client";

import { ArrowUpRight, BookOpenText } from "lucide-react";
import { cn } from "@/lib/utils";
import { Research } from "@/lib/data";
import { useModal } from "@/components/ui/modal-context";

export function ResearchCard({
  research,
  className,
}: {
  research: Research;
  className?: string;
}) {
  const { openResearch } = useModal();

  return (
    <div
      onClick={() => openResearch(research)}
      className={cn(
        "flex flex-col h-full rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 hover:border-primary/20 cursor-pointer group",
        className
      )}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <BookOpenText className="h-4 w-4 text-primary" />
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Research</span>
          </div>
          <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">{research.title}</h3>
          <p className="mt-1 text-sm font-medium text-muted-foreground">{research.subtitle}</p>
        </div>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 -translate-y-2 translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 shrink-0" />
      </div>

      <p className="flex-1 mt-2 text-sm leading-relaxed text-muted-foreground/90 line-clamp-3">
        {research.description}
      </p>

      <div className="mt-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {research.tags.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded-full bg-primary/5 px-2.5 py-0.5 text-xs font-medium text-primary"
            >
              {t}
            </span>
          ))}
        </div>

        {research.links?.length ? (
          <div className="flex flex-wrap gap-3 text-sm pt-4 border-t border-border/50">
            {research.links.map((l) => (
              <span
                key={l.label}
                className="inline-flex items-center gap-1 font-medium text-primary"
              >
                {l.label}
                <ArrowUpRight className="h-3 w-3" />
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
