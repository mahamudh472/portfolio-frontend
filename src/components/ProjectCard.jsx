import { motion as Motion } from 'framer-motion'

const ProjectCard = ({ project }) => {
  return (
    <Motion.article
      whileHover={{ scale: 1.02, y: -3 }}
      transition={{ type: 'spring', stiffness: 180, damping: 18 }}
      className="glass-card h-full rounded-2xl p-6"
    >
      <h3 className="text-xl font-semibold text-slate-100">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span key={tech} className="rounded-full border border-emerald-400/35 px-2.5 py-1 text-xs text-emerald-200">
            {tech}
          </span>
        ))}
      </div>
      <a
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition hover:text-sky-200"
        href={project.github}
        target="_blank"
        rel="noreferrer"
      >
        View on GitHub
        <span aria-hidden="true">{'->'}</span>
      </a>
    </Motion.article>
  )
}

export default ProjectCard
