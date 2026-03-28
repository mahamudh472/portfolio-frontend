import { useEffect, useState } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import Loader from '../components/Loader'
import { getExperience } from '../services/portfolioService'

const ExperiencePage = () => {
  const [records, setRecords] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadExperience = async () => {
      try {
        const result = await getExperience()
        setRecords(result)
      } finally {
        setLoading(false)
      }
    }

    loadExperience()
  }, [])

  return (
    <SectionWrapper title="Experience" subtitle="Timeline">
      {loading ? (
        <Loader label="Loading timeline..." />
      ) : (
        <div className="relative ml-2 border-l border-slate-700 pl-6">
          {records.map((item) => (
            <article key={item.id} className="relative mb-8">
              <span
                className={`absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full border border-slate-900 ${
                  item.type === 'education' ? 'bg-sky-400' : 'bg-emerald-400'
                }`}
              />
              <p className="text-xs uppercase tracking-[0.2em] text-sky-300">{item.duration}</p>
              {item.type === 'education' && (
                <p className="mt-2 inline-flex rounded-full border border-sky-300/40 bg-sky-400/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-sky-200">
                  Education
                </p>
              )}
              <h3 className="mt-1 text-lg font-semibold text-slate-100">{item.role}</h3>
              <p className="text-sm text-slate-400">{item.company}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.summary}</p>
            </article>
          ))}
        </div>
      )}
    </SectionWrapper>
  )
}

export default ExperiencePage
