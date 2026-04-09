import { useEffect, useState } from 'react'
import GalleryCard from '../components/GalleryCard'
import Loader from '../components/Loader'
import SectionWrapper from '../components/SectionWrapper'
import { getGalleryItems } from '../services/portfolioService'

const GalleryPage = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeItem, setActiveItem] = useState(null)

  useEffect(() => {
    const loadGallery = async () => {
      try {
        const result = await getGalleryItems()
        setItems(result)
      } finally {
        setLoading(false)
      }
    }

    loadGallery()
  }, [])

  return (
    <SectionWrapper title="Gallery" subtitle="Snapshots">
      <p className="mb-6 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
        Gallery data is now served from backend API endpoints through the same frontend service layer.
      </p>

      {loading ? (
        <Loader label="Loading gallery..." />
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <GalleryCard key={item.id} item={item} onClick={setActiveItem} />
          ))}
        </div>
      )}

      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm">
          <div className="glass-card relative w-full max-w-3xl overflow-hidden rounded-2xl">
            <button
              type="button"
              className="absolute right-3 top-3 rounded-md bg-slate-950/70 px-2 py-1 text-xs text-slate-200"
              onClick={() => setActiveItem(null)}
            >
              Close
            </button>
            <img src={activeItem.image} alt={activeItem.title} className="max-h-[65vh] w-full object-cover" />
            <div className="p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-sky-300">{activeItem.category}</p>
              <h3 className="mt-1 text-xl font-semibold text-slate-100">{activeItem.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{activeItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </SectionWrapper>
  )
}

export default GalleryPage
