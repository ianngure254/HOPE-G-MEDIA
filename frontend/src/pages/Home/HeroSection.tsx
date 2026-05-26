import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import heroImg1 from '../../assets/Beauty1.png'
import heroImg2 from '../../assets/Gadget1.png'
import heroImg3 from '../../assets/fashion.png'

const MOCKUP_IMAGES = [
  { src: heroImg1, alt: 'Beauty brand identity', rotate: -6, x: -20 },
  { src: heroImg2, alt: 'Gadgets promo flyer', rotate: 2, x: 0 },
  { src: heroImg3, alt: 'Fashion social media design', rotate: 7, x: 20 },
]

const STATS = [
  { value: '50+', label: 'Projects Completed' },
  { value: '30+', label: 'Happy Clients' },
  { value: '5★', label: 'Average Rating' },
]

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const mockupsY = useTransform(scrollYProgress, [0, 1], [0, 80])

  return (
    <section
      ref={ref}
      className="relative min-h-[calc(100vh-5rem)] flex flex-col overflow-hidden bg-neutral-50 dark:bg-neutral-950"
      aria-label="Hero"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center text-center pt-20 pb-12 gap-10 flex-1">

        {/* Eyebrow tag */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-xs font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
            Available for new projects
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4 max-w-4xl"
        >
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-neutral-900 dark:text-neutral-50 leading-[1.1] tracking-tight">
            Visual Design That{' '}
            <span className="relative inline-block text-brand-500">
              Makes You
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="8"
                viewBox="0 0 300 8"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 6 C60 2, 120 2, 180 5 S260 8, 298 4"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  className="text-brand-400"
                />
              </svg>
            </span>{' '}
            Stand Out.
          </h1>
          <p className="text-lg sm:text-xl text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            Graphic design for brands, events, and creatives who refuse to be ignored. From bold flyers to full brand identities — I turn ideas into visuals that convert.
          </p>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-base font-medium hover:bg-neutral-700 dark:hover:bg-white transition-colors duration-200 shadow-sm"
          >
            View My Work
            <ArrowRight size={18} />
          </Link>
          <a
            href="https://wa.me/254792514301?text=Hi%20there!%20I'm%20interested%20in%20your%20design%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-green-500 hover:bg-green-600 text-white text-base font-medium transition-colors duration-200 shadow-sm"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex items-center gap-8 sm:gap-12"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-50">
                {stat.value}
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 whitespace-nowrap">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Mockup images row */}
        <motion.div
          style={{ y: mockupsY }}
          className="relative flex items-end justify-center gap-3 sm:gap-5 w-full max-w-2xl mx-auto mt-4"
        >
          {MOCKUP_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 + i * 10, rotate: img.rotate * 0.5 }}
              animate={{ opacity: 1, y: 0, rotate: img.rotate }}
              transition={{ duration: 0.7, delay: 0.5 + i * 0.12, ease: 'easeOut' }}
              className="relative flex-1 max-w-40 sm:max-w-50 rounded-xl overflow-hidden shadow-2xl border-2 border-white dark:border-neutral-800"
              style={{ translateX: img.x }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </motion.div>
          ))}

          {/* Glow under mockups */}
          <div
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-brand-400/20 dark:bg-brand-500/10 blur-3xl rounded-full pointer-events-none"
            aria-hidden="true"
          />
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        aria-hidden="true"
      >
        <span className="text-xs text-neutral-400">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-0.5 h-5 bg-neutral-300 dark:bg-neutral-700 rounded-full"
        />
      </motion.div>
    </section>
  )
}
