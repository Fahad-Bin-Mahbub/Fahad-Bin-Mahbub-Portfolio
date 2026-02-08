"use client";

import { Project } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
    </div>
  );
}
