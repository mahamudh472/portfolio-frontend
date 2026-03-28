import { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'
import BlogSkeleton from '../components/BlogSkeleton'
import Loader from '../components/Loader'
import SectionWrapper from '../components/SectionWrapper'
import { getBlogs } from '../services/portfolioService'

const BlogPage = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const result = await getBlogs()
        setPosts(result)
      } finally {
        setLoading(false)
      }
    }

    loadBlogs()
  }, [])

  return (
    <SectionWrapper title="Blog" subtitle="Markdown Ready">
      <p className="mb-6 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
        These posts are loaded from mock JSON through the API service layer. Later, you can replace the mock adapter with real backend
        endpoints and markdown content from your editor.
      </p>

      {loading ? (
        <>
          <Loader label="Loading articles..." />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <BlogSkeleton key={index} />
            ))}
          </div>
        </>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </SectionWrapper>
  )
}

export default BlogPage
