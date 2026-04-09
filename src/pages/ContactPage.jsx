import { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import SectionWrapper from '../components/SectionWrapper'
import { getContactSection } from '../services/portfolioService'

const ContactPage = () => {
  const [contactContent, setContactContent] = useState({ connectTitle: '', connectDescription: '', socialLinks: [] })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadContactContent = async () => {
      try {
        const result = await getContactSection()
        setContactContent({
          connectTitle: result?.connectTitle || '',
          connectDescription: result?.connectDescription || '',
          socialLinks: result?.socialLinks || [],
        })
      } finally {
        setLoading(false)
      }
    }

    loadContactContent()
  }, [])

  return (
    <SectionWrapper title="Contact" subtitle="Get in Touch">
      {loading ? (
        <Loader label="Loading contact section..." />
      ) : (
        <>
      <div className="grid gap-6 lg:grid-cols-2">
        <form className="glass-card rounded-2xl p-6" onSubmit={(event) => event.preventDefault()}>
          <div className="space-y-4">
            <label className="block text-sm text-slate-300">
              Name
              <input
                type="text"
                placeholder="Your name"
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-slate-100 outline-none transition focus:border-sky-300"
              />
            </label>
            <label className="block text-sm text-slate-300">
              Email
              <input
                type="email"
                placeholder="mahadymahamudh472@gmail.com"
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-slate-100 outline-none transition focus:border-sky-300"
              />
            </label>
            <label className="block text-sm text-slate-300">
              Message
              <textarea
                rows="5"
                placeholder="Tell me about your project..."
                className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900/70 px-3 py-2 text-slate-100 outline-none transition focus:border-sky-300"
              />
            </label>
            <button
              type="submit"
              className="rounded-xl bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="glass-card rounded-2xl p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-sky-300">Connect</p>
          <h3 className="mt-2 text-xl font-semibold text-slate-100">{contactContent.connectTitle}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            {contactContent.connectDescription}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {contactContent.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-sky-300 hover:text-sky-200"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-600 text-[10px] font-semibold">
                  {link.icon}
                </span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
        </>
      )}
    </SectionWrapper>
  )
}

export default ContactPage
