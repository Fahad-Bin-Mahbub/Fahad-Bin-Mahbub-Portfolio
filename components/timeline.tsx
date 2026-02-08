import { cn } from "@/lib/utils";

export type TimelineItem = {
  title: string;
  subtitle: string;
  meta: string;
  bullets: string[];
};

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="space-y-8 pl-4 border-l border-border/50">
      {items.map((item, idx) => (
        <div key={idx} className="relative pl-8">
            <span className="absolute -left-[21px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
            
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                <h3 className="font-semibold text-lg text-foreground">{item.title}</h3>
                <span className="text-sm font-mono text-muted-foreground">{item.meta}</span>
            </div>
            
            <p className="text-sm font-medium text-primary mb-3">{item.subtitle}</p>
            
            <div className="rounded-lg border border-border bg-card/50 p-4">
                <ul className="space-y-2">
                    {item.bullets.map((b, i) => (
                        <li key={i} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                            <span className="mt-1.5 h-1 w-1 rounded-full bg-muted-foreground/50 shrink-0" />
                            {b}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      ))}
    </div>
  );
}
