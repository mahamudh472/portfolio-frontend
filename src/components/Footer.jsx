const Footer = () => {
  return (
    <footer className="border-t border-slate-800/70 py-6">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 text-xs text-slate-400 sm:px-6 lg:px-8">
        <p>Built for backend-focused portfolio showcase.</p>
        <p>{new Date().getFullYear()} Md. Mahmud Hasan</p>
      </div>
    </footer>
  )
}

export default Footer
