import { motion } from 'framer-motion'
import {
  Layers, Sparkles, Share2, CreditCard, Megaphone, FileText,
} from 'lucide-react'
import type { Service } from '../../types/global'
import { cn } from '../../utils/cn'

const ICON_MAP: Record<string, React.ElementType> = {
  Layers,
  Sparkles,
  Share2,
  CreditCard,
  Megaphone,
  FileText,
}

interface ServiceCardProps {
  service: Service
  index?: number
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = ICON_MAP[service.icon] ?? Layers

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.07 }}
      className={cn(
        'group bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-100 dark:border-neutral-800',
        'shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1',
      )}
    >
      {/* Icon */}
      <div className="w-11 h-11 rounded-xl bg-brand-50 dark:bg-brand-900/20 flex items-center justify-center mb-4 group-hover:bg-brand-100 dark:group-hover:bg-brand-900/40 transition-colors duration-200">
        <Icon size={20} className="text-brand-600 dark:text-brand-400" />
      </div>

      {/* Title & description */}
      <h3 className="font-display font-semibold text-neutral-900 dark:text-neutral-100 mb-2 leading-snug">
        {service.title}
      </h3>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">
        {service.description}
      </p>

      {/* Features */}
      <ul className="space-y-1.5">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400">
            <span className="w-1 h-1 rounded-full bg-brand-400 shrink-0" />
            {f}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
