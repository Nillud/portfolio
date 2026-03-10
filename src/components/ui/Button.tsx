import Link from 'next/link'
import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends ComponentProps<'button'> {
  children: ReactNode
  icon?: ReactNode
  variant?: 'primary' | 'outline'
  className?: string
  onClick?: () => void
  asLink?: boolean
  href?: string
}

export function Button({
  children,
  icon,
  variant = 'primary',
  className,
  onClick,
  asLink = false,
  href = '',
  ...props
}: Props) {
  const base =
    'inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition cursor-pointer'

  const variants = {
    primary:
      'bg-black text-white hover:opacity-80 dark:bg-white dark:text-black',

    outline:
      'border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900'
  }

  return (
    <>
      {asLink ? (
        <Link
          className={twMerge(base, variants[variant], className)}
          href={href}
          onClick={onClick}
        >
          {icon}
          {children}
        </Link>
      ) : (
        <button
          className={twMerge(base, variants[variant], className)}
          onClick={onClick}
          {...props}
        >
          {icon}
          {children}
        </button>
      )}
    </>
  )
}
