import { Briefcase, Github } from 'lucide-react'
import Image from 'next/image'

import { Button } from './ui/Button'

export function Hero() {
  return (
    <section className="relative mb-20 overflow-hidden rounded-3xl p-6 md:mb-32 md:p-12">
      <div
        className="absolute inset-0 opacity-30 blur-3xl"
        style={{
          background: 'linear-gradient(120deg,#6366f1,#8b5cf6,#06b6d4)',
          backgroundSize: '200% 200%',
          animation: 'gradientMove 12s ease infinite'
        }}
      />

      <div className="relative">
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between md:gap-12">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl leading-tight font-bold md:text-5xl">
                <span className="bg-linear-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Агадуллин Л. А.
                </span>
              </h1>

              <p className="mt-2 text-lg text-zinc-500 md:text-xl">
                Frontend Developer
              </p>
            </div>

            <p className="max-w-xl text-sm leading-relaxed text-zinc-600 md:text-lg dark:text-zinc-400">
              Разрабатываю интерфейсы на React и Next.js. Большой опыт в
              CRM-системах. Также имеется некоммерческий fullstack-опыт с <code>nestjs + postgresql.</code>
            </p>

            <div className="flex flex-wrap gap-1 text-sm text-zinc-500">
              <span>3+ years coding</span>
              <span>• 20+ projects</span>
              <span>• 1 open source библиотека</span>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
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
              className="rounded-full bg-white h-45 w-45 object-cover md:h-auto md:w-45 dark:bg-zinc-900"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3 text-sm md:justify-start">
        <span className="flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-green-700 dark:bg-green-900/30 dark:text-green-400">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
          <span>Open to work</span>
        </span>
      </div>
    </section>
  )
}
