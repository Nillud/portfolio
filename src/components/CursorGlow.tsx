'use client'

import { useEffect, useState } from 'react'

export function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e: { clientX: any; clientY: any }) => setPos({ x: e.clientX, y: e.clientY })

    window.addEventListener('mousemove', move)

    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      className="pointer-events-none fixed h-50 w-50 rounded-full bg-purple-500 opacity-20 blur-3xl"
      style={{
        left: pos.x - 100,
        top: pos.y - 100
      }}
    />
  )
}
