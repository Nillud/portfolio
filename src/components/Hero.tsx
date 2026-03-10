import { Briefcase, Github } from 'lucide-react'
import Image from 'next/image'

import { Button } from './ui/Button'

export function Hero() {
  return (
    <section className="relative mb-32 overflow-hidden rounded-3xl p-12">
      <div
        className="absolute inset-0 opacity-30 blur-3xl"
        style={{
          background: 'linear-gradient(120deg,#6366f1,#8b5cf6,#06b6d4)',
          backgroundSize: '200% 200%',
          animation: 'gradientMove 12s ease infinite'
        }}
      />

      <div className="relative">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl leading-tight font-bold">
                <span className="bg-linear-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Агадуллин Л. А.
                </span>
              </h1>

              <p className="mt-3 text-xl text-zinc-500">
                Frontend Developer
              </p>
            </div>

            <p className="max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Разрабатываю интерфейсы на React и Next.js. Люблю проектировать
              универсальные компоненты и писать масштабируемую архитектуру.
            </p>

            <div className="flex gap-10 text-sm text-zinc-500">
              3+ years coding • 10+ projects • 1 open source lib
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="tech-badge">React</span>
              <span className="tech-badge">Next.js</span>
              <span className="tech-badge">TypeScript</span>
            </div>

            <div className="flex gap-4">
              <Button
                asLink
                href="https://github.com/Nillud"
                icon={<Github size={18} />}
              >
                Github
              </Button>

              <Button
                asLink
                href="https://ufa.hh.ru/resume/743a536dff081c3c650039ed1f4c363142564a"
                variant="outline"
                icon={<Briefcase size={18} />}
              >
                HH
              </Button>
            </div>
          </div>

          <div className="relative rounded-full bg-linear-to-r from-purple-500 via-blue-500 to-cyan-500 p-0.5">
            <Image
              src="/avatar.jpeg"
              alt="avatar"
              width={180}
              height={180}
              className="rounded-full bg-white dark:bg-zinc-900"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3 text-sm">
        <span className="flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-green-700 dark:bg-green-900/30 dark:text-green-400">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
          Open to work
        </span>
      </div>
    </section>
  )
}
