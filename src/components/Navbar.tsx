'use client'

import { Code, FolderGit2, Layers } from 'lucide-react'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

const links = [
  { id: 'tech', label: 'Технологии', icon: Layers },
  { id: 'projects', label: 'Проекты', icon: FolderGit2 },
  { id: 'opensource', label: 'Библиотеки', icon: Code }
]

export function Navbar() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.find(e => e.isIntersecting)
        if (visible) setActive(visible.target.id)
      },
      { threshold: 0.3 }
    )

    links.forEach(link => {
      const el = document.getElementById(link.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="fixed top-4 left-1/2 z-50 -translate-x-1/2">
      <nav className="flex items-center gap-1 rounded-full border border-zinc-200 bg-white/70 px-2 py-2 shadow-lg backdrop-blur-xl md:gap-2 md:px-4 dark:border-zinc-800 dark:bg-black/70">
        {links.map(link => {
          const Icon = link.icon

          return (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={twMerge(
                `flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm transition`,
                active === link.id
                  ? 'bg-zinc-900 text-white dark:bg-white dark:text-black'
                  : 'hover:bg-zinc-200 dark:hover:bg-zinc-800'
              )}
            >
              <Icon size={18} />

              {/* текст скрываем на mobile */}
              <span className="hidden md:inline">{link.label}</span>
            </a>
          )
        })}
      </nav>
    </div>
  )
}
