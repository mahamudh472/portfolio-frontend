const SkillBadge = ({ skill }) => {
  return (
    <span className="inline-flex items-center rounded-full border border-sky-300/30 bg-slate-900/70 px-3 py-1 text-sm font-medium text-slate-100 shadow-[0_8px_20px_rgba(14,165,233,0.12)] backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-sky-300/60 hover:text-sky-200">
      {skill}
    </span>
  )
}

export default SkillBadge
