import { Github, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="mt-40 border-t border-zinc-200 p-12 dark:border-zinc-800">
      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Агадуллин Л. А.
        </p>

        <div className="flex gap-6">
          <a href="https://github.com/Nillud">
            <Github size={20} />
          </a>

          <a href="mailto:agadullin.linar@mail.com">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
