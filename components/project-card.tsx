import { Project } from "@/lib/data";
import { cn, getTagColor } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { useModal } from "@/components/ui/modal-context";

export function ProjectCard({ project }: { project: Project }) {
  const { openProject } = useModal();

  return (
    <div
      onClick={() => openProject(project)}
      className="group relative flex flex-col rounded-2xl bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:bg-card/80 hover:-translate-y-1 cursor-pointer border border-border/40 hover:border-border/80"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-semibold text-lg tracking-tight text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 -translate-y-2 translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
      </div>

      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
        {project.description}
      </p>

      <div className="mt-auto flex flex-wrap gap-2">
        {project.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className={cn(
              "inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-medium transition-colors",
              getTagColor(tag)
            )}
          >
            {tag}
          </span>
        ))}
         {project.tags.length > 3 && (
            <span className="inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                +{project.tags.length - 3}
            </span>
        )}
      </div>
    </div>
  );
}
