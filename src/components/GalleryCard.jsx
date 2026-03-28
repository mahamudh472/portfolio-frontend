const GalleryCard = ({ item, onClick }) => {
  return (
    <button
      type="button"
      onClick={() => onClick(item)}
      className="group glass-card overflow-hidden rounded-2xl text-left transition hover:-translate-y-1"
    >
      <img
        src={item.image}
        alt={item.title}
        className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="p-4">
        <p className="text-xs uppercase tracking-[0.18em] text-sky-300">{item.category}</p>
        <h3 className="mt-1 text-lg font-semibold text-slate-100">{item.title}</h3>
        <p className="mt-2 text-sm text-slate-300">{item.description}</p>
      </div>
    </button>
  )
}

export default GalleryCard
