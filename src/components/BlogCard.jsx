import { Link } from 'react-router-dom'

const BlogCard = ({ post }) => {
  return (
    <article className="glass-card flex h-full flex-col rounded-2xl overflow-hidden">
      <img src={post.coverImage} alt={post.title} className="h-44 w-full object-cover" loading="lazy" />
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-slate-400">
          <span>{post.publishedAt}</span>
          <span className="text-slate-600">|</span>
          <span>{post.readingTime}</span>
        </div>

        <h3 className="text-xl font-semibold text-slate-100">{post.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">{post.excerpt}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-slate-700 px-2.5 py-1 text-xs text-sky-200">
              {tag}
            </span>
          ))}
        </div>

        <Link
          to={`/blog/${post.slug}`}
          className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg bg-sky-400/90 px-3 py-2 text-xs font-semibold text-slate-950 transition hover:bg-sky-300"
        >
          Read Article
          <span aria-hidden="true">{'->'}</span>
        </Link>
      </div>
    </article>
  )
}

export default BlogCard
