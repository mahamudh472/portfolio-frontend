const SkeletonCard = () => {
  return (
    <div className="glass-card rounded-2xl p-6">
      <div className="h-5 w-2/3 animate-pulse rounded bg-slate-700" />
      <div className="mt-3 h-3 w-full animate-pulse rounded bg-slate-800" />
      <div className="mt-2 h-3 w-11/12 animate-pulse rounded bg-slate-800" />
      <div className="mt-6 flex gap-2">
        <div className="h-6 w-16 animate-pulse rounded-full bg-slate-700" />
        <div className="h-6 w-20 animate-pulse rounded-full bg-slate-700" />
        <div className="h-6 w-14 animate-pulse rounded-full bg-slate-700" />
      </div>
    </div>
  )
}

export default SkeletonCard
