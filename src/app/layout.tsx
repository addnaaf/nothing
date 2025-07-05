import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { CommandPalette } from '@/components/command-palette'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adna Fika Agestifanka - Portfolio',
  description: 'Frontend Engineer & UI/UX Designer passionate about creating beautiful, functional web experiences.',
  keywords: ['frontend', 'engineer', 'react', 'nextjs', 'typescript', 'portfolio'],
  authors: [{ name: 'Adna Fika Agestifanka' }],
  creator: 'Adna Fika Agestifanka',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adna-portfolio.vercel.app',
    title: 'Adna Fika Agestifanka - Portfolio',
    description: 'Frontend Engineer & UI/UX Designer passionate about creating beautiful, functional web experiences.',
    siteName: 'Adna Fika Agestifanka Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adna Fika Agestifanka - Portfolio',
    description: 'Frontend Engineer & UI/UX Designer passionate about creating beautiful, functional web experiences.',
    creator: '@adnafika',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <main className="min-h-screen bg-background text-foreground">
            {children}
          </main>
          <CommandPalette />
        </ThemeProvider>
      </body>
    </html>
  )
}