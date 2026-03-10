import { Github } from 'lucide-react'

import { BrowserMockup } from './BrowserMockup'
import { Button } from '../ui/Button'

interface Props {
  title: string
  description: string
  image: string
  stack: string[]
  github: string
  demo: string
}

export function ProjectCard({ title, description, image, stack, github }: Props) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-zinc-200 transition hover:shadow-2xl dark:border-zinc-800">
      <div className="overflow-hidden transition duration-500 group-hover:scale-[1.05]">
        <BrowserMockup
          image={image}
          alt={title}
        />
      </div>

      <div className="space-y-4 p-6">
        <h3 className="text-xl font-semibold">{title}</h3>

        <p className="text-zinc-600 dark:text-zinc-400">{description}</p>

        <div className="flex flex-wrap gap-2">
          {stack.map(tech => (
            <span
              key={tech}
              className="rounded-full bg-zinc-200 px-3 py-1 text-sm dark:bg-zinc-800"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-2">
          <Button variant='outline' asLink href={github} className="flex cursor-pointer items-center gap-2 text-sm hover:underline">
            <Github size={16} />
            Github
          </Button>
        </div>
      </div>
    </div>
  )
}
