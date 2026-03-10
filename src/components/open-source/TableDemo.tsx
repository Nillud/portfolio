'use client'

import { TECHNOLOGIES } from '@/data/technologies'
import { Star } from 'lucide-react'
import { Columns, DataTable } from 'nillud-data-table'

import { TechCard } from '../tech/TechCard'

const columns: Columns = [
  {
    selectable: true,
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
          className="w-full"
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

export function TableDemo() {
  return (
    <DataTable
      tableData={data}
      columns={columns}
      tableName={'demo-table'}
      isFooter
      paginationCounts={[0, 1]}
    />
  )
}
