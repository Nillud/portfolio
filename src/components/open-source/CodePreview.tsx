'use client'

import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { Button } from '../ui/Button'

const code = `const columns: Columns = [
  {
    selectable: true,
    field: "",
    title: "",
    width: 50
  },
  {
    field: "name",
    title: "Name",
    formatter(cell) {
      return (
        <TechCard
          tech={TECHNOLOGIES.find((el) => el.content === cell)!}
        />
      );
    },
  },
  {
    field: "type",
    title: "Type",
  },
  {
    field: "stars",
    title: "Stars",
    formatter(cell) {
      return (
        <div className="flex items-center gap-2">
          <span>{cell}</span>
          <Star size={20} color="yellow" fill="yellow" />
        </div>
      );
    },
  },
];

const data = [
  { id: 1, name: "React", type: "Library", stars: 200000 },
  { id: 2, name: "Next.js", type: "Framework", stars: 120000 },
  { id: 3, name: "TanStack Query", type: "Library", stars: 35000 },
];

export function TableDemo() {
  return (
    <DataTable
      tableData={data}
      columns={columns}
      tableName={"demo-table"}
      isFooter
      paginationCounts={[0, 1]}
    />
  );
}`

export function CodePreview() {
  const [open, setOpen] = useState(false)

  return (
    <div className="my-10">
      <Button
        variant="outline"
        onClick={() => setOpen(!open)}
        className="ml-auto flex rounded-lg border border-zinc-300 px-4 py-2 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
      >
        {open ? 'Скрыть код' : 'Показать код'}
      </Button>

      {open && (
        <div className="mt-4 overflow-hidden rounded-xl">
          <SyntaxHighlighter
            language="tsx"
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              padding: '24px',
              borderRadius: '12px'
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  )
}
