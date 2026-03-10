import Image from "next/image"

export function BrowserMockup({
  image,
  alt
}: {
  image: string
  alt: string
}) {
  return (
    <div className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
      <div className="flex gap-2 px-3 py-2 bg-zinc-100 dark:bg-zinc-900">
        <span className="w-3 h-3 bg-red-400 rounded-full" />
        <span className="w-3 h-3 bg-yellow-400 rounded-full" />
        <span className="w-3 h-3 bg-green-400 rounded-full" />
      </div>

      <Image
        src={image}
        alt={alt}
        width={800}
        height={500}
        className="w-full max-h-62.5 object-cover"
      />
    </div>
  )
}