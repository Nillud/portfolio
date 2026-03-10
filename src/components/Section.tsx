import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  title: string
  id: string
}

export function Section({ title, children, id }: Props) {
  return (
    <section
      id={id}
      className="mb-32"
    >
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>

      <div className="mt-2 h-0.5 w-16 bg-linear-to-r from-purple-500 to-blue-500" />

      <div className="mt-8">{children}</div>
    </section>
  )
}
