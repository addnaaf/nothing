"use client"

import { Command } from "cmdk"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

interface Action {
  id: string
  label: string
  href?: string | null
  external?: string
}

const actions: Action[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "projects", label: "Projects", href: "/projects" },
  { id: "about", label: "About", href: "/about" },
  { id: "toggle-theme", label: "Toggle Theme", href: null },
  { id: "github", label: "GitHub", external: "https://github.com/adna" },
  { id: "linkedin", label: "LinkedIn", external: "https://linkedin.com/in/adna" },
]

export default function CommandPalette() {
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const dialogRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
      if (e.key === "Escape") {
        setOpen(false)
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  useEffect(() => {
    if (open) {
      dialogRef.current?.focus()
    }
  }, [open])

  const runAction = (action: Action) => {
    if (action.href) {
      router.push(action.href)
      setOpen(false)
    } else if (action.id === "toggle-theme") {
      setTheme(theme === "dark" ? "light" : "dark")
    } else if (action.external) {
      window.open(action.external, "_blank", "noopener,noreferrer")
      setOpen(false)
    }
  }

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-24 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <Command.Dialog
            label="Command Palette"
            className="bg-neutral-900 border border-neutral-700 rounded-lg w-[90vw] max-w-md shadow-2xl text-neutral-100"
            loop
            ref={dialogRef as any}
            onEscape={() => setOpen(false)}
          >
            <Command.Input
              placeholder="Type a command..."
              value={search}
              onValueChange={setSearch}
              autoFocus
              className="w-full px-4 py-3 bg-transparent border-b border-neutral-700 outline-none"
            />
            <Command.List className="max-h-[50vh] overflow-y-auto">
              {actions
                .filter((a) => a.label.toLowerCase().includes(search.toLowerCase()))
                .map((action) => (
                  <Command.Item
                    key={action.id}
                    onSelect={() => runAction(action)}
                    className="px-4 py-3 cursor-pointer data-[selected=true]:bg-primary data-[selected=true]:text-white"
                  >
                    {action.label}
                  </Command.Item>
                ))}
              <Command.Empty className="p-4 text-neutral-500">
                No results found.
              </Command.Empty>
            </Command.List>
          </Command.Dialog>
        </div>
      )}
    </>
  )
}