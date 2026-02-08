import { Section } from "@/components/section";
import { ProjectsGrid } from "@/components/projects-grid";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <Section
      title="Projects"
      description=""
    >
      <ProjectsGrid projects={projects} />
    </Section>
  );
}
