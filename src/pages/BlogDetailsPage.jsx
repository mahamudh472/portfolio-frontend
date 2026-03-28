import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'
import { Link, useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import SectionWrapper from '../components/SectionWrapper'
import { getBlogBySlug } from '../services/portfolioService'

const extractText = (node) => {
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map((child) => extractText(child)).join('')
  if (node && typeof node === 'object' && node.props) return extractText(node.props.children)
  return ''
}

const copyToClipboard = async (text) => {
  if (navigator?.clipboard?.writeText) {
    await navigator.clipboard.writeText(text)
    return
  }

  const textArea = document.createElement('textarea')
  textArea.value = text
  textArea.style.position = 'fixed'
  textArea.style.opacity = '0'
  document.body.appendChild(textArea)
  textArea.select()
  document.execCommand('copy')
  document.body.removeChild(textArea)
}

const MarkdownCodeBlock = ({ children }) => {
  const [copied, setCopied] = useState(false)

  const codeText = extractText(children).replace(/\n$/, '')

  const handleCopy = async () => {
    try {
      await copyToClipboard(codeText)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="markdown-code-block">
      <button type="button" className="code-copy-btn" onClick={handleCopy} aria-label="Copy code">
        {copied ? 'Copied' : 'Copy'}
      </button>
      <pre>{children}</pre>
    </div>
  )
}

const BlogDetailsPage = () => {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPost = async () => {
      try {
        const result = await getBlogBySlug(slug)
        setPost(result)
      } finally {
        setLoading(false)
      }
    }

    loadPost()
  }, [slug])

  if (loading) {
    return (
      <SectionWrapper title="Loading Blog" subtitle="Article">
        <Loader label="Rendering article..." />
      </SectionWrapper>
    )
  }

  if (!post) {
    return (
      <SectionWrapper title="Blog Not Found" subtitle="404">
        <div className="glass-card rounded-2xl p-6">
          <p className="text-slate-300">The blog post does not exist in current mock data.</p>
          <Link to="/blog" className="mt-4 inline-flex rounded-lg bg-sky-400 px-4 py-2 text-sm font-semibold text-slate-950">
            Back to Blog
          </Link>
        </div>
      </SectionWrapper>
    )
  }

  return (
    <SectionWrapper>
      <article className="mx-auto max-w-4xl">
        <Link to="/blog" className="mb-5 inline-flex text-sm font-medium text-sky-300 transition hover:text-sky-200">
          {'<-'} Back to all posts
        </Link>

        <div className="glass-card overflow-hidden rounded-2xl">
          <img src={post.coverImage} alt={post.title} className="h-60 w-full object-cover sm:h-80" />
          <div className="p-6 sm:p-8">
            <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span>{post.publishedAt}</span>
              <span className="text-slate-600">|</span>
              <span>{post.readingTime}</span>
            </div>

            <h1 className="text-3xl font-semibold leading-tight text-slate-100 sm:text-4xl">{post.title}</h1>

            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-slate-700 px-2.5 py-1 text-xs text-sky-200">
                  {tag}
                </span>
              ))}
            </div>

            <div className="markdown-body mt-7">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={{
                  pre({ children }) {
                    return <MarkdownCodeBlock>{children}</MarkdownCodeBlock>
                  },
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </article>
    </SectionWrapper>
  )
}

export default BlogDetailsPage
