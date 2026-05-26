import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import type { Testimonial } from '../../types/testimonial'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="bg-white dark:bg-neutral-900 rounded-2xl p-6 shadow-sm border border-neutral-100 dark:border-neutral-800 flex flex-col gap-4"
    >
      {/* Stars */}
      <div className="flex items-center gap-0.5" aria-label={`Rating: ${testimonial.rating} out of 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < testimonial.rating ? 'fill-brand-400 text-brand-400' : 'text-neutral-300'}
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed flex-1">
        "{testimonial.text}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-neutral-100 dark:border-neutral-800">
        {testimonial.avatar ? (
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-9 h-9 rounded-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-9 h-9 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center">
            <span className="text-brand-600 dark:text-brand-400 font-semibold text-sm">
              {testimonial.name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">{testimonial.name}</p>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            {testimonial.role}
            {testimonial.company && `, ${testimonial.company}`}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
