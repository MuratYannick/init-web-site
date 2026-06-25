import { useState } from 'react'
import ThemeToggle from '../ThemeToggle/ThemeToggle.jsx'

function Navbar({ links = [], dark, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#accueil" className="font-bold text-lg text-brand">Logo</a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand dark:hover:text-brand transition-colors"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle dark={dark} onToggle={onToggleTheme} />
        </nav>

        {/* Mobile: toggle + burger */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle dark={dark} onToggle={onToggleTheme} />
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu"
            className="p-2 rounded text-slate-600 dark:text-slate-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 px-4 py-3 flex flex-col gap-3">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand dark:hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Navbar
