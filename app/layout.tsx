import "./globals.css"
import { Inter } from "next/font/google"
import { Providers } from "./providers"
import CommandPalette from "../components/CommandPalette"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Adna Fika Agestifanka",
    template: "%s | Adna Fika Agestifanka",
  },
  description: "Portfolio of Adna Fika Agestifanka - Frontend Engineer",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-neutral-900 text-neutral-100`}>
        <Providers>
          {children}
          <CommandPalette />
        </Providers>
      </body>
    </html>
  )
}