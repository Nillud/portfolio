import { PROJECTS } from "@/data/projects"
import { ProjectCard } from "./ProjectCard"

export function Projects() {
  return (
    <div className="grid md:grid-cols-2 gap-10">

      {PROJECTS.map((project) => (
        <ProjectCard
          key={project.title}
          {...project}
        />
      ))}

    </div>
  )
}