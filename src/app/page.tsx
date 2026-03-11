import { Hero } from '@/components/Hero'
import { Section } from '@/components/Section'
import { OpenSource } from '@/components/open-source/OpenSource'
import { Projects } from '@/components/projects/Projects'
import { TechSection } from '@/components/tech/TechSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-6xl px-6 pt-24">
        <Hero />

        <Section
          id="tech"
          title="Технологии"
        >
          <p className="mt-2 text-zinc-500">
            Технологии и инструменты, которые использую в работе
          </p>
          <TechSection />
        </Section>

        <Section
          id="projects"
          title="Pet-проекты"
        >
          <Projects />
        </Section>

        <Section
          id="opensource"
          title="Библиотеки"
        >
          <OpenSource />
        </Section>
      </main>
    </div>
  )
}
