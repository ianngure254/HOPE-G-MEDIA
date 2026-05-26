import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { TESTIMONIALS } from '../../data/testimonials'
import SectionTitle from '../../components/ui/SectionTitle'

const AUTO_PLAY_INTERVAL = 5000 // ms

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'fill-amber-400 text-amber-400' : 'text-neutral-300 dark:text-neutral-600'}
        />
      ))}
    </div>
  )
}

function Avatar({ name, avatarUrl }: { name: string; avatarUrl?: string }) {
  if (avatarUrl) {
    return (
      <img
        src={avatarUrl}
        alt={name}
        className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-200 dark:ring-brand-700"
        loading="lazy"
      />
    )
  }
  return (
    <div className="w-12 h-12 rounded-full bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center ring-2 ring-brand-200 dark:ring-brand-700">
      <span className="text-brand-600 dark:text-brand-400 font-bold text-lg">{name.charAt(0)}</span>
    </div>
  )
}

const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -80 : 80,
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isPaused, setIsPaused] = useState(false)
  const dragStartX = useRef(0)
  const total = TESTIMONIALS.length

  const go = useCallback(
    (index: number, dir: number) => {
      setDirection(dir)
      setCurrent((index + total) % total)
    },
    [total],
  )

  const next = useCallback(() => go(current + 1, 1), [current, go])
  const prev = useCallback(() => go(current - 1, -1), [current, go])

  // Auto-play
  useEffect(() => {
    if (isPaused) return
    const id = setInterval(next, AUTO_PLAY_INTERVAL)
    return () => clearInterval(id)
  }, [isPaused, next])

  const t = TESTIMONIALS[current]

  return (
    <section
      className="py-20 sm:py-28 bg-white dark:bg-neutral-900 overflow-hidden"
      aria-label="Testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-14 text-center">
          <SectionTitle
            eyebrow="Client Love"
            title="What People Say"
            subtitle="Real results from real clients — here's what working together looks like."
            align="center"
          />
        </div>

        {/* Slider area */}
        <div className="relative max-w-3xl mx-auto">

          {/* Background accent */}
          <div
            className="absolute inset-0 -m-6 rounded-3xl bg-linear-to-br from-brand-50 via-transparent to-neutral-100 dark:from-brand-950/30 dark:via-transparent dark:to-neutral-800/20 pointer-events-none"
            aria-hidden="true"
          />

          {/* Card */}
          <div
            className="relative"
            onMouseDown={(e) => { dragStartX.current = e.clientX }}
            onMouseUp={(e) => {
              const delta = e.clientX - dragStartX.current
              if (delta < -40) next()
              else if (delta > 40) prev()
            }}
            onTouchStart={(e) => { dragStartX.current = e.touches[0].clientX }}
            onTouchEnd={(e) => {
              const delta = e.changedTouches[0].clientX - dragStartX.current
              if (delta < -40) next()
              else if (delta > 40) prev()
            }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={t.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="relative bg-white dark:bg-neutral-900 rounded-2xl p-8 sm:p-10 shadow-lg border border-neutral-100 dark:border-neutral-800 select-none cursor-grab active:cursor-grabbing"
                aria-live="polite"
              >
                {/* Large decorative quote */}
                <Quote
                  size={56}
                  className="absolute top-6 right-8 text-brand-100 dark:text-brand-900/40 rotate-180"
                  aria-hidden="true"
                />

                {/* Stars */}
                <StarRating rating={t.rating} />

                {/* Quote text */}
                <blockquote className="mt-5 text-lg sm:text-xl text-neutral-800 dark:text-neutral-200 leading-relaxed font-medium relative z-10">
                  "{t.text}"
                </blockquote>

                {/* Author row */}
                <div className="mt-8 flex items-center gap-4">
                  <Avatar name={t.name} avatarUrl={t.avatar} />
                  <div>
                    <p className="font-bold text-neutral-900 dark:text-neutral-100">{t.name}</p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                      {t.role}{t.company && `, ${t.company}`}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls row */}
          <div className="mt-8 flex items-center justify-between">

            {/* Dot indicators */}
            <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial navigation">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => go(i, i > current ? 1 : -1)}
                  className={`
                    transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500
                    ${i === current
                      ? 'w-7 h-2.5 bg-brand-500'
                      : 'w-2.5 h-2.5 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-500'
                    }
                  `}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4 h-0.5 w-full bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
            <motion.div
              key={`${current}-progress`}
              className="h-full bg-brand-400 dark:bg-brand-500 rounded-full origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isPaused ? undefined : 1 }}
              transition={{ duration: AUTO_PLAY_INTERVAL / 1000, ease: 'linear' }}
            />
          </div>

        </div>

        {/* Mini grid of all testimonials below (decorative / scannable) */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <button
              key={testimonial.id}
              onClick={() => go(i, i > current ? 1 : -1)}
              className={`
                text-left p-3 rounded-xl border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500
                ${i === current
                  ? 'border-brand-300 dark:border-brand-600 bg-brand-50 dark:bg-brand-900/20'
                  : 'border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 hover:border-neutral-200 dark:hover:border-neutral-700'
                }
              `}
              aria-pressed={i === current}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <Avatar name={testimonial.name} avatarUrl={testimonial.avatar} />
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 truncate">
                    {testimonial.name}
                  </p>
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                "{testimonial.text}"
              </p>
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}
