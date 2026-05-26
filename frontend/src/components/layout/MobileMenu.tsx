import { useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { cn } from '../../utils/cn'

interface MobileMenuProps {
  isOpen: boolean
  links: { label: string; href: string }[]
  onClose: () => void
}

export default function MobileMenu({ isOpen, links, onClose }: MobileMenuProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-4/5 max-w-sm bg-white dark:bg-neutral-950 shadow-2xl md:hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100 dark:border-neutral-800">
              <span className="font-display font-bold text-lg text-neutral-900 dark:text-neutral-50">
                Hope<span className="text-brand-500"> G</span> Media
              </span>
            </div>

            {/* Nav links */}
            <nav className="flex-1 px-4 py-6 space-y-1" aria-label="Mobile navigation">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.1 }}
                >
                  <NavLink
                    to={link.href}
                    end={link.href === '/'}
                    onClick={onClose}
                    className={({ isActive }) =>
                      cn(
                        'flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-200',
                        isActive
                          ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/20'
                          : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800/60',
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            {/* Footer CTA */}
            <div className="px-6 py-6 border-t border-neutral-100 dark:border-neutral-800 space-y-3">
              <Link
                to="/contact"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 font-medium text-sm hover:bg-neutral-700 dark:hover:bg-white transition-colors duration-200"
              >
                Get in Touch
              </Link>
              <a
                href="https://wa.me/PLACEHOLDER"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-medium text-sm transition-colors duration-200"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
