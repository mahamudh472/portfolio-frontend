import { useEffect, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import SectionWrapper from '../components/SectionWrapper'
import Loader from '../components/Loader'
import SkeletonCard from '../components/SkeletonCard'
import { getProjects } from '../services/portfolioService'

const ProjectsPage = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const result = await getProjects()
        setProjects(result)
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  return (
    <SectionWrapper title="Projects" subtitle="Mock API + Axios">
      {loading ? (
        <>
          <Loader label="Fetching projects..." />
          <div className="grid gap-5 sm:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        </>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </SectionWrapper>
  )
}

export default ProjectsPage
