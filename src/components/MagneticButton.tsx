'use client'

import { ComponentProps, PropsWithChildren, useRef } from 'react'
import { Button } from './ui/Button';

export function MagneticButton({ children }: PropsWithChildren<ComponentProps<'button'>>) {
  const ref = useRef<HTMLButtonElement>(null)

  const handleMove = (e: { clientX: number; clientY: number }) => {
    const rect = ref.current!.getBoundingClientRect()

    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    ref.current!.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
  }

  const reset = () => {
    ref.current!.style.transform = `translate(0,0)`
  }

  return (
    <Button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="rounded-xl bg-black px-6 py-3 text-white transition-transform duration-200"
    >
      {children}
    </Button>
  )
}
