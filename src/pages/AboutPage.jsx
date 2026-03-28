import SectionWrapper from '../components/SectionWrapper'
import SkillBadge from '../components/SkillBadge'
import { skillGroups } from '../utils/siteConfig'

const AboutPage = () => {
  return (
    <SectionWrapper title="About Me" subtitle="Introduction">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="glass-card rounded-2xl p-6">
          <p className="text-base leading-relaxed text-slate-300">
            I am a dedicated Python and Django developer with 4+ years of experience building scalable web applications and backend
            services. I focus on writing clean code, solving real business problems, and delivering reliable user experiences.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            I have solved 300+ algorithmic problems across Codeforces, LeetCode, HackerRank, CodingGame, and CodeChef, which
            strengthens my analytical thinking and system-level problem solving.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-6">
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-sky-300">Approach</p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Build scalable backend systems with practical architecture</li>
            <li>Deliver features with strong API and business-logic quality</li>
            <li>Continuously improve performance and development workflow</li>
            <li>Collaborate effectively with frontend and design teams</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <article key={group.title} className="glass-card rounded-2xl p-5">
            <h3 className="mb-4 text-lg font-semibold text-slate-100">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default AboutPage
