import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'
import { cn } from '../../utils/cn'
import MobileMenu from './MobileMenu'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Detect scroll for navbar shadow
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md border-b border-neutral-200/60 dark:border-neutral-800/60 shadow-sm'
            : 'bg-transparent',
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 group"
              aria-label="Hope G Media — Home"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200">
                <span className="text-white font-bold text-sm font-display">H</span>
              </div>
              <span className="font-display font-bold text-lg text-neutral-900 dark:text-neutral-50 tracking-tight">
                Hope<span className="text-brand-500"> G</span> Media
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  end={link.href === '/'}
                  className={({ isActive }) =>
                    cn(
                      'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                      isActive
                        ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20'
                        : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-2">
              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200"
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Get in Touch CTA (desktop) */}
              <Link
                to="/contact"
                className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-medium hover:bg-neutral-700 dark:hover:bg-white transition-colors duration-200"
              >
                Get in Touch
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                className="md:hidden p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile nav drawer */}
      <MobileMenu isOpen={menuOpen} links={NAV_LINKS} onClose={() => setMenuOpen(false)} />
    </>
  )
}
