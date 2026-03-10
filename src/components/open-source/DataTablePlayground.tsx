'use client'

import { Star } from 'lucide-react'
import { Columns, DataTable } from 'nillud-data-table'
import { useState } from 'react'
import { TechCard } from '../tech/TechCard'
import { TECHNOLOGIES } from '@/data/technologies'

const columns: Columns = [
  {
    selectable: true,
    filterable: false,
    field: '',
    title: '',
    width: 50
  },
  {
    field: 'name',
    title: 'Name',
    formatter(cell) {
      return (
        <TechCard
          tech={TECHNOLOGIES.find(el => el.content === cell)!}
          className="w-full border-none"
        />
      )
    }
  },
  {
    field: 'type',
    title: 'Type'
  },
  {
    field: 'stars',
    title: 'Stars',
    formatter(cell) {
      return (
        <div className="flex items-center gap-2">
          <span>{cell}</span>
          <Star
            size={20}
            color="yellow"
            fill="yellow"
          />
        </div>
      )
    }
  }
]

const data = [
  { id: 1, name: 'React', type: 'Library', stars: 200000 },
  { id: 2, name: 'Next.js', type: 'Framework', stars: 120000 },
  { id: 3, name: 'TanStack Query', type: 'Library', stars: 35000 }
]

export function DataTablePlayground() {
  const [sorting, setSorting] = useState(true)
  const [selection, setSelection] = useState(true)
  const [footer, setFooter] = useState(true)
  const [pagination, setPagination] = useState(true)

  const playgroundColumns = columns.map(col => ({
    ...col,
    sortable: col.field === '' ? false : sorting,
    selectable: selection && col.selectable
  }))

  return (
    <div className="mt-4 space-y-6">
      {/* controls */}

      <div className="flex flex-wrap gap-4 rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={sorting}
            onChange={() => setSorting(!sorting)}
          />
          Sorting
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={selection}
            onChange={() => setSelection(!selection)}
          />
          Row selection
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={footer}
            onChange={() => setFooter(!footer)}
          />
          Footer
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={pagination}
            onChange={() => setPagination(!pagination)}
          />
          Pagination
        </label>
      </div>

      {/* table */}

      <DataTable
        tableName="playground"
        columns={playgroundColumns}
        tableData={data}
        isFooter={footer}
        paginationCounts={pagination ? [0, 2, 5] : [0]}
      />
    </div>
  )
}
