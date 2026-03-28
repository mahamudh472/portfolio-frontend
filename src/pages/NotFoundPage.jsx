import { Link } from 'react-router-dom'
import SectionWrapper from '../components/SectionWrapper'

const NotFoundPage = () => {
  return (
    <SectionWrapper>
      <div className="glass-card rounded-2xl p-8 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-sky-300">404</p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-100">Page not found</h1>
        <p className="mt-2 text-slate-300">The route you requested does not exist.</p>
        <Link to="/" className="mt-6 inline-flex rounded-xl bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-950">
          Back to Home
        </Link>
      </div>
    </SectionWrapper>
  )
}

export default NotFoundPage
