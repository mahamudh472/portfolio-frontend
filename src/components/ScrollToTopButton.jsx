import { useEffect, useState } from 'react'

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 280)

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      className="fixed bottom-6 right-6 z-40 rounded-full border border-sky-300/40 bg-slate-900/85 px-4 py-2 text-sm font-semibold text-sky-200 shadow-lg backdrop-blur transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-100"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >
      Top
    </button>
  )
}

export default ScrollToTopButton
