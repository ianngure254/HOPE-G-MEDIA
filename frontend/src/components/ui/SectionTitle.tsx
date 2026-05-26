import { cn } from '../../utils/cn'

interface SectionTitleProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'space-y-3',
        align === 'center' && 'text-center',
        className,
      )}
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-500 dark:text-brand-400">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-neutral-50 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-neutral-500 dark:text-neutral-400 text-base sm:text-lg leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}
