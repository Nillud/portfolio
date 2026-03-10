import { ICardItem } from '@/types/card-item.types'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

interface Props {
  tech: ICardItem
  className?: string
}

export function TechCard({ tech, className }: Props) {
  return (
    <div
      className={twMerge(
        `group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900`,
        className
      )}
    >
      {/* glow */}
      <div
        className="absolute inset-0 opacity-0 blur-xl transition duration-500 group-hover:opacity-30"
        style={{ background: tech.color }}
      />

      <div className="relative flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 transition group-hover:scale-110 dark:bg-zinc-800">
          <Image
            src={tech.iconLink}
            alt={tech.content}
            width={28}
            height={28}
          />
        </div>

        <p className="text-lg font-semibold">{tech.content}</p>
      </div>
    </div>
  )
}
