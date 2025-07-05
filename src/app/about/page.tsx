import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { About } from '@/components/about'

export const metadata: Metadata = {
  title: 'About - Adna Fika Agestifanka',
  description: 'Learn more about Adna Fika Agestifanka, a passionate frontend engineer and UI/UX designer.',
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <About />
    </div>
  )
}