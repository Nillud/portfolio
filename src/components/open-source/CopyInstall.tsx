'use client'

import { Check } from 'lucide-react'
import { useState } from 'react'

import { Button } from '../ui/Button'

export function CopyInstall() {
  const [isCopied, setIsCopied] = useState<boolean>(false)

  return (
    <div className="hidden mt-4 md:flex items-center gap-4">
      <code className="rounded-lg bg-black px-4 py-2 text-white">
        npm install nillud-data-table
      </code>
      <Button
        variant="outline"
        className='w-31.25 h-10.5 flex items-center justify-center'
        onClick={() =>
          navigator.clipboard
            .writeText('npm install nillud-data-table')
            .then(() => {
              setIsCopied(true)

              setTimeout(() => {
                setIsCopied(false)
              }, 1000)
            })
        }
      >
        {isCopied ? <Check /> : 'Скопировать'}
      </Button>
    </div>
  )
}
