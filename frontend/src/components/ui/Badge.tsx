import { cn } from '../../utils/cn'

type BadgeVariant = 'default' | 'brand' | 'outline' | 'success'

interface BadgeProps {
  label: string
  variant?: BadgeVariant
  className?: string
}

const VARIANTS: Record<BadgeVariant, string> = {
  default: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300',
  brand: 'bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300',
  outline: 'border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300',
  success: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
}

export default function Badge({ label, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        VARIANTS[variant],
        className,
      )}
    >
      {label}
    </span>
  )
}
