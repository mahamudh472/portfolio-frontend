const Loader = ({ label = 'Loading...' }) => {
  return (
    <div className="flex items-center justify-center gap-3 py-10 text-slate-300">
      <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-600 border-t-sky-300" aria-hidden="true" />
      <span className="text-sm font-medium">{label}</span>
    </div>
  )
}

export default Loader
