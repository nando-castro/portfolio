import { useState } from 'react'
import {
  ArrowUpRight,
  Flower2,
  Workflow,
  Orbit,
  CalendarDays,
  Building2,
} from 'lucide-react'
import type { Project } from '../data/projects'
export function ProjectArt({ project }: { project: Project }) {
  const Icon =
    project.id === 'flora'
      ? Flower2
      : project.id === 'flow'
        ? Workflow
        : project.id === 'agenda'
          ? CalendarDays
          : project.id === 'sedallis'
            ? Building2
            : Orbit
  return (
    <div className={`project-art art-${project.id}`} aria-hidden="true">
      <div className="art-grid" />
      <Icon size={74} strokeWidth={1} />
      <span>
        {project.id.toUpperCase()}
        <small>CONCEITO VISUAL / {project.category.toUpperCase()}</small>
      </span>
    </div>
  )
}
export function ProjectCard({
  project,
  open,
}: {
  project: Project
  open: () => void
}) {
  return (
    <article className="project-card">
      <ProjectVisual project={project} />
      <div className="project-body">
        <div className="eyebrow">{project.category}</div>
        <h3>
          <button onClick={open}>
            {project.name}
            <ArrowUpRight size={19} />
          </button>
        </h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="demo-label">○ {project.status}</div>
      </div>
    </article>
  )
}

export function ProjectVisual({ project }: { project: Project }) {
  const [failedImage, setFailedImage] = useState('')
  return project.image && failedImage !== project.image ? (
    <img
      className="project-image"
      src={`${import.meta.env.BASE_URL}${project.image.replace(/^\//, '')}`}
      alt={project.imageAlt || project.name}
      onError={() => setFailedImage(project.image || '')}
    />
  ) : (
    <ProjectArt project={project} />
  )
}
