import { motion as Motion } from 'framer-motion'
import { cn } from '../utils/cn'

const SectionWrapper = ({ title, subtitle, className, children }) => {
  return (
    <Motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={cn('mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8', className)}
    >
      {(title || subtitle) && (
        <div className="mb-8">
          {subtitle && <p className="mb-2 text-sm uppercase tracking-[0.22em] text-sky-300">{subtitle}</p>}
          {title && <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">{title}</h2>}
        </div>
      )}
      {children}
    </Motion.section>
  )
}

export default SectionWrapper
