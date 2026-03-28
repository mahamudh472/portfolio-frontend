import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks } from '../utils/siteConfig'
import { cn } from '../utils/cn'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-slate-700/50 bg-slate-950/70 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-lg font-semibold tracking-tight text-slate-100">
          <span className="text-sky-300">Md.</span> Mahmud Hasan
        </Link>

        <button
          type="button"
          className="inline-flex rounded-lg border border-slate-700 p-2 text-slate-100 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <span className="text-xs font-semibold uppercase tracking-wide">{isOpen ? 'Close' : 'Menu'}</span>
        </button>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    'text-sm font-medium text-slate-300 transition hover:text-slate-100',
                    isActive && 'text-sky-300',
                  )
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950/95 md:hidden">
          <ul className="mx-auto flex w-full max-w-6xl flex-col px-4 py-3 sm:px-6 lg:px-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'block rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800/70 hover:text-slate-100',
                      isActive && 'bg-slate-800/70 text-sky-300',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
