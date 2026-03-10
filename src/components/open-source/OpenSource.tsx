import Image from 'next/image'
import Link from 'next/link'

import { NpmIcon } from '../icons/NpmIcon'
import { Button } from '../ui/Button'
import { CodePreview } from './CodePreview'
import { DataTablePlayground } from './DataTablePlayground'
import { NpmStats } from './NpmStats'
import { TableDemo } from './TableDemo'
import { CopyInstall } from './CopyInstall'

export function OpenSource() {
  return (
    <div className="space-y-10">
      <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="flex items-center justify-between">
          <div className="w-full">
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-semibold">nillud-data-table</h3>

              <Image
                src="https://img.shields.io/npm/v/nillud-data-table"
                alt="npm-version"
                width={40}
                height={20}
                unoptimized
                className="h-auto w-auto"
              />

              <Image
                src="https://img.shields.io/npm/dm/nillud-data-table"
                alt="npm-downloads"
                width={40}
                height={20}
                unoptimized
                className="h-auto w-auto"
              />
            </div>

            <p className="mt-2 text-zinc-500">
              Универсальная таблица для React с сортировкой, фильтрацией и
              экспортом данных.
            </p>

            <CopyInstall />

            <NpmStats />
          </div>

          <Link
            href="https://www.npmjs.com/package/nillud-data-table"
            target="_blank"
            className="mb-auto flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-white hover:opacity-80"
          >
            <NpmIcon />
            npm
          </Link>
        </div>
      </div>

      <CodePreview />

      {/* <TableDemo /> */}

      <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
        <h3 className="text-xl font-semibold">Interactive Playground</h3>

        <p className="mb-4 text-base text-zinc-500">
          Эта интерактивная площадка демонстрирует гибкость компонента{' '}
          <b>nillud-data-table</b>. Переключайте функции, чтобы увидеть, как
          адаптируется таблица.
        </p>

        <DataTablePlayground />
      </div>
    </div>
  )
}
