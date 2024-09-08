// ProjectCard.js
import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  if (!project || !project.topic) {
    return null; // Return null if project is undefined or doesn't have a topic
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{project.topic}</h2>
      <p className="text-white text-sm bg-indigo-600 w-fit p-1 rounded-lg line-clamp-3">{project.tag}</p>
      <p className="text-gray-600 line-clamp-3">{project.description}</p>
      <Link to={`/projects/${project.id}`} className="mt-4 inline-block text-indigo-500 hover:underline">
        Learn more
      </Link>
    </div>
  )
}
