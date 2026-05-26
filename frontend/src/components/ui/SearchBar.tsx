import { Search, X } from 'lucide-react'
import { cn } from '../../utils/cn'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  onClear: () => void
  placeholder?: string
  className?: string
}

export default function SearchBar({
  value,
  onChange,
  onClear,
  placeholder = 'Search projects…',
  className,
}: SearchBarProps) {
  return (
    <div className={cn('relative', className)}>
      <Search
        size={16}
        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
        aria-hidden="true"
      />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-10 py-2.5 text-sm rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
        aria-label="Search projects"
      />
      {value && (
        <button
          onClick={onClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors duration-200"
          aria-label="Clear search"
        >
          <X size={15} />
        </button>
      )}
    </div>
  )
}
