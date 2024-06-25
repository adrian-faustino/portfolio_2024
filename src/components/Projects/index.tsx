import { PROJECTS } from "@/db";
import { ProjectCard } from "./ProjectCard";

interface ProjectsProps {}

export function Projects({}: ProjectsProps) {
  return (
    <div>
      <h3>Projects</h3>

      <div>
        {PROJECTS.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
}
