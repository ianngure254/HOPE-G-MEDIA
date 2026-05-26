import type { ProjectCategory } from '../../types/project'
import { CATEGORIES } from '../../data/categories'
import { cn } from '../../utils/cn'

interface CategoryFilterProps {
  active: ProjectCategory | 'All'
  onChange: (cat: ProjectCategory | 'All') => void
  className?: string
}

export default function CategoryFilter({ active, onChange, className }: CategoryFilterProps) {
  const all: (ProjectCategory | 'All')[] = ['All', ...CATEGORIES]

  return (
    <div
      className={cn('flex flex-wrap gap-2', className)}
      role="group"
      aria-label="Filter by category"
    >
      {all.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={cn(
            'px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap',
            active === cat
              ? 'bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900'
              : 'bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:border-neutral-400 dark:hover:border-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100',
          )}
          aria-pressed={active === cat}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
