'use client'

import { useEffect, useState } from 'react'

export function NpmStats() {
  const [downloads, setDownloads] = useState<number | null>(null)

  useEffect(() => {
    fetch('https://api.npmjs.org/downloads/point/last-year/nillud-data-table')
      .then(r => r.json())
      .then(d => setDownloads(d.downloads))
  }, [])

  return (
    <div className="mt-6">
      <p className="text-xs text-zinc-500">last year npm downloads</p>
      <p className="text-lg font-semibold">
        {downloads ? downloads.toLocaleString() : '...'}
      </p>
    </div>
  )
}
