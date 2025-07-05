'use client'

import * as React from 'react'
import { Command } from 'cmdk'
import { useRouter } from 'next/navigation'
import { useTheme } from './theme-provider'

export function CommandPalette() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()
  const { toggleTheme } = useTheme()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <>
      {open && (
        <div className="cmdk-overlay" onClick={() => setOpen(false)} />
      )}
      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        className="cmdk-dialog bg-card border border-border rounded-lg shadow-lg"
      >
        <Command.Input
          placeholder="Type a command or search..."
          className="w-full px-4 py-3 text-sm bg-transparent border-none outline-none"
        />
        <Command.List className="max-h-[300px] overflow-y-auto p-2">
          <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
            No results found.
          </Command.Empty>
          
          <Command.Group heading="Navigation">
            <Command.Item
              onSelect={() => {
                router.push('/')
                setOpen(false)
              }}
              className="flex items-center gap-2 px-3 py-2 text-sm rounded-md cursor-pointer hover:bg-accent aria-selected:bg-accent"
            >
              <span>🏠</span>
              <span>Home</span>
            </Command.Item>
            <Command.Item
              onSelect={() => {
                router.push('/about')
                setOpen(false)
              }}
              className="flex items-center gap-2 px-3 py-2 text-sm rounded-md cursor-pointer hover:bg-accent aria-selected:bg-accent"
            >
              <span>👤</span>
              <span>About</span>
            </Command.Item>
            <Command.Item
              onSelect={() => {
                router.push('/projects')
                setOpen(false)
              }}
              className="flex items-center gap-2 px-3 py-2 text-sm rounded-md cursor-pointer hover:bg-accent aria-selected:bg-accent"
            >
              <span>💼</span>
              <span>Projects</span>
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Actions">
            <Command.Item
              onSelect={() => {
                toggleTheme()
                setOpen(false)
              }}
              className="flex items-center gap-2 px-3 py-2 text-sm rounded-md cursor-pointer hover:bg-accent aria-selected:bg-accent"
            >
              <span>🌙</span>
              <span>Toggle Theme</span>
            </Command.Item>
          </Command.Group>

          <Command.Group heading="Social">
            <Command.Item
              onSelect={() => {
                window.open('https://github.com/adnafika', '_blank')
                setOpen(false)
              }}
              className="flex items-center gap-2 px-3 py-2 text-sm rounded-md cursor-pointer hover:bg-accent aria-selected:bg-accent"
            >
              <span>🐙</span>
              <span>GitHub</span>
            </Command.Item>
            <Command.Item
              onSelect={() => {
                window.open('https://linkedin.com/in/adnafika', '_blank')
                setOpen(false)
              }}
              className="flex items-center gap-2 px-3 py-2 text-sm rounded-md cursor-pointer hover:bg-accent aria-selected:bg-accent"
            >
              <span>💼</span>
              <span>LinkedIn</span>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command.Dialog>
    </>
  )
}