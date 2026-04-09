const Loader = ({ label = 'Loading...' }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-10 text-slate-300" role="status" aria-live="polite">
      <span className="relative inline-flex h-9 w-9 items-center justify-center" aria-hidden="true">
        <span className="absolute h-9 w-9 animate-ping rounded-full bg-sky-400/20" />
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-slate-600 border-t-sky-300" />
      </span>
      <span className="text-sm font-medium">{label}</span>
      <span className="flex items-center gap-1" aria-hidden="true">
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-sky-300 [animation-delay:-0.2s]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-sky-300 [animation-delay:-0.1s]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-sky-300" />
      </span>
    </div>
  )
}

export default Loader
