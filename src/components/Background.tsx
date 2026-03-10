export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-50 -left-50 h-175 w-175 animate-pulse rounded-full bg-purple-500 opacity-20 blur-[160px]" />

      <div className="absolute -right-50 -bottom-50 h-175 w-175 animate-pulse rounded-full bg-blue-500 opacity-20 blur-[160px]" />

      <div className="absolute top-[40%] left-[40%] h-125 w-125 rounded-full bg-pink-500 opacity-10 blur-[160px]" />
    </div>
  )
}
