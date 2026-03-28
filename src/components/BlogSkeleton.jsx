const BlogSkeleton = () => {
  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      <div className="h-44 w-full animate-pulse bg-slate-800" />
      <div className="p-5">
        <div className="h-3 w-32 animate-pulse rounded bg-slate-700" />
        <div className="mt-3 h-5 w-4/5 animate-pulse rounded bg-slate-700" />
        <div className="mt-2 h-3 w-full animate-pulse rounded bg-slate-800" />
        <div className="mt-2 h-3 w-11/12 animate-pulse rounded bg-slate-800" />
      </div>
    </div>
  )
}

export default BlogSkeleton
