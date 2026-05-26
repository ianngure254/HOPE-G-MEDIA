import { forwardRef } from 'react'
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp'
type Size = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: Variant
  size?: Size
  loading?: boolean
  className?: string
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button'; href?: never }

type ButtonAsAnchor = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a'; href: string }

type ButtonProps = ButtonAsButton | ButtonAsAnchor

const VARIANTS: Record<Variant, string> = {
  primary:
    'bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-700 dark:hover:bg-white shadow-sm',
  secondary:
    'bg-brand-500 text-white hover:bg-brand-600 shadow-sm',
  outline:
    'border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800',
  ghost:
    'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800',
  whatsapp:
    'bg-green-500 hover:bg-green-600 text-white shadow-sm',
}

const SIZES: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-xs rounded-md gap-1.5',
  md: 'px-5 py-2.5 text-sm rounded-lg gap-2',
  lg: 'px-7 py-3.5 text-base rounded-xl gap-2.5',
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(
    { variant = 'primary', size = 'md', loading = false, className, children, ...rest },
    ref,
  ) {
    const classes = cn(
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none',
      VARIANTS[variant],
      SIZES[size],
      className,
    )

    if ((rest as ButtonAsAnchor).as === 'a') {
      const { as: _as, ...anchorRest } = rest as ButtonAsAnchor
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={classes}
          {...anchorRest}
        >
          {loading ? <Spinner /> : children}
        </a>
      )
    }

    const { as: _as, ...btnRest } = rest as ButtonAsButton
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={loading}
        className={classes}
        {...btnRest}
      >
        {loading ? <Spinner /> : children}
      </button>
    )
  },
)

function Spinner() {
  return (
    <svg
      className="animate-spin h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
    </svg>
  )
}

export default Button
