import { TECHNOLOGIES } from '@/data/technologies'

import { TechCard } from './TechCard'

export function TechSection() {
  return (
    <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {TECHNOLOGIES.map(tech => (
        <TechCard
          key={tech.content}
          tech={tech}
        />
      ))}
    </div>
  )
}
