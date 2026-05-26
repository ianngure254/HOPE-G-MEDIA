import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MessageCircle, ArrowRight } from 'lucide-react'

export default function CtaSection() {
  return (
    <section className="py-20 sm:py-28 bg-neutral-950 overflow-hidden relative" aria-label="Call to action">

      {/* Background orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-brand-500/10 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="space-y-4"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-400">
            Let's Create Together
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight">
            Ready to Elevate{' '}
            <span className="text-brand-400">Your Brand?</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Whether you need a brand identity, event flyers, or a complete social media kit — let's talk. First consultation is free.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-neutral-100 text-neutral-900 text-base font-medium transition-colors duration-200 shadow-sm"
          >
            Start a Project
            <ArrowRight size={18} />
          </Link>
          <a
            href="https://wa.me/254792514301?text=Hi%20there!%20I%27m%20interested%20in%20your%20design%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-green-500 hover:bg-green-600 text-white text-base font-medium transition-colors duration-200 shadow-sm"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  )
}
