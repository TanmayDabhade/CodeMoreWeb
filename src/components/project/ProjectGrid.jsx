// ProjectGrid.js
import ProjectCard from './ProjectCard'

export default function ProjectGrid({ currentProjects }) {
  console.log(currentProjects); // Log to see what data is being passed
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {currentProjects.map((project, index) => (
        <ProjectCard key={project?.id || index} project={project} />
      ))}
    </div>
  )
}
