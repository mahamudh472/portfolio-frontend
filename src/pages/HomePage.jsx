import { Link } from 'react-router-dom'
import { motion as Motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import { useTypingEffect } from '../hooks/useTypingEffect'
import { typingSkills } from '../utils/siteConfig'

const HomePage = () => {
  const typedText = useTypingEffect(typingSkills)
  const highlightStats = [
    { label: 'Experience', value: '4+ Years' },
    { label: 'Problems Solved', value: '300+' },
    { label: 'Django Apps', value: '5+' },
  ]

  const expertiseCards = [
    {
      title: 'Production Django Development',
      description: 'Building scalable Django and DRF applications with clean architecture and maintainable backend logic.',
    },
    {
      title: 'API and Data Systems',
      description: 'Designing API contracts, implementing robust business rules, and optimizing relational database performance.',
    },
    {
      title: 'Asynchronous and Cloud Workflows',
      description: 'Implementing task queues, cloud-backed deployments, and resilient backend services for real-world scale.',
    },
  ]

  return (
    <SectionWrapper className="pt-16 sm:pt-20">
      <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="mb-3 text-sm uppercase tracking-[0.24em] text-sky-300">Backend Developer</p>
          <h1 className="text-balance text-4xl font-semibold leading-tight text-slate-100 sm:text-5xl lg:text-6xl">
            Md. Mahmud Hasan
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
            Dedicated Python and Django Developer focused on building efficient, scalable, and user-centric applications with
            clean code and measurable product impact.
          </p>

          <div className="mt-5 h-8 text-sm font-medium text-emerald-300 sm:text-base">
            <span className="text-slate-400">Working on: </span>
            <span className="border-r border-emerald-300 pr-1">{typedText}</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="rounded-xl bg-sky-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-300"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="rounded-xl border border-slate-600 bg-slate-900/50 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-slate-400"
            >
              Contact
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {highlightStats.map((stat) => (
              <div key={stat.label} className="glass-card rounded-xl p-3 text-center">
                <p className="text-xl font-semibold text-slate-100 sm:text-2xl">{stat.value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="glass-card relative overflow-hidden rounded-3xl p-6"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.24),transparent_45%),radial-gradient(circle_at_78%_78%,rgba(34,197,94,0.2),transparent_42%)]" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Core Focus</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-200 sm:text-base">
              <li>API Design and Contract-First Development</li>
              <li>Database Modeling and Query Optimization</li>
              <li>Dockerized Environments and Linux Workflow</li>
              <li>Monitoring, Logging, and Production Stability</li>
            </ul>

            <div className="mt-6 rounded-xl border border-emerald-300/25 bg-emerald-400/10 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-emerald-300">Open to Work</p>
              <p className="mt-1 text-sm text-slate-200">Available for backend development, Django projects, API integration, and performance optimization.</p>
            </div>
          </div>
        </Motion.div>
      </div>

      <Motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="mt-10"
      >
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm uppercase tracking-[0.2em] text-sky-300">What I Bring</p>
          <Link to="/about" className="text-sm font-medium text-slate-300 transition hover:text-sky-300">
            Explore details
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {expertiseCards.map((card) => (
            <article key={card.title} className="glass-card rounded-2xl p-5 transition hover:-translate-y-1">
              <h3 className="text-lg font-semibold text-slate-100">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{card.description}</p>
            </article>
          ))}
        </div>
      </Motion.div>
    </SectionWrapper>
  )
}

export default HomePage
