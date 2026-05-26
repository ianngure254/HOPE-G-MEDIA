import { Link } from 'react-router-dom'
import { MessageCircle, Globe, AtSign, Share2, Mail } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
]

const SERVICES_LINKS = [
  'Flyers & Posters',
  'Brand Identity',
  'Social Media Graphics',
  'Business Cards',
  'Marketing Materials',
  'Print & Templates',
]

const SOCIAL = [
  { label: 'Instagram', icon: Globe, href: '#' },
  { label: 'Twitter / X', icon: AtSign, href: '#' },
  { label: 'LinkedIn', icon: Share2, href: '#' },
  { label: 'Email', icon: Mail, href: 'mailto:hello@hopegmedia.com' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-neutral-950 text-neutral-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-neutral-800">

          {/* Brand col */}
          <div className="lg:col-span-1 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm font-display">H</span>
              </div>
              <span className="font-display font-bold text-lg text-white tracking-tight">
                Hope<span className="text-brand-400"> G</span> Media
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-neutral-500 max-w-xs">
              Visual design that connects, inspires, and converts. Crafting bold identities and scroll-stopping graphics for brands that mean business.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 pt-2">
              {SOCIAL.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-neutral-800 hover:bg-brand-500 flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-200"
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">Navigation</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-neutral-500 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">Services</h3>
            <ul className="space-y-2">
              {SERVICES_LINKS.map((s) => (
                <li key={s}>
                  <span className="text-sm text-neutral-500">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">Let's Work Together</h3>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Have a project in mind? Reach out for a free consultation.
            </p>
            <a
              href="https://wa.me/254792514301?text=Hi%20there!%20I%27m%20interested%20in%20your%20design%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-green-500 hover:bg-green-600 text-white text-sm font-medium transition-colors duration-200"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
            <div>
              <a
                href="mailto:hello@hopegmedia.com"
                className="text-sm text-brand-400 hover:text-brand-300 transition-colors duration-200"
              >
                hello@hopegmedia.com
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-600">
          <p>© {year} Hope G Media. All rights reserved.</p>
          <p>Designed & built with ❤️ — Visual design that makes you stand out.</p>
        </div>

      </div>
    </footer>
  )
}
