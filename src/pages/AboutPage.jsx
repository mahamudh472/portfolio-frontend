import { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import SectionWrapper from '../components/SectionWrapper'
import SkillBadge from '../components/SkillBadge'
import { getAboutSection } from '../services/portfolioService'

const AboutPage = () => {
  const [aboutContent, setAboutContent] = useState({ introParagraphs: [], approachItems: [], skillGroups: [] })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadAboutContent = async () => {
      try {
        const result = await getAboutSection()
        setAboutContent({
          introParagraphs: result?.introParagraphs || [],
          approachItems: result?.approachItems || [],
          skillGroups: result?.skillGroups || [],
        })
      } finally {
        setLoading(false)
      }
    }

    loadAboutContent()
  }, [])

  return (
    <SectionWrapper title="About Me" subtitle="Introduction">
      {loading ? (
        <Loader label="Loading about section..." />
      ) : (
        <>
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="glass-card rounded-2xl p-6">
          {aboutContent.introParagraphs.map((paragraph, index) => (
            <p key={index} className={`text-base leading-relaxed text-slate-300 ${index > 0 ? 'mt-4' : ''}`}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="glass-card rounded-2xl p-6">
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-sky-300">Approach</p>
          <ul className="space-y-2 text-sm text-slate-300">
            {aboutContent.approachItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {aboutContent.skillGroups.map((group) => (
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
        </>
      )}
    </SectionWrapper>
  )
}

export default AboutPage
