import { Hero } from '@/components/hero'
import { Navigation } from '@/components/navigation'
import { FeaturedProjects } from '@/components/featured-projects'
import { Contact } from '@/components/contact'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedProjects />
      <Contact />
    </div>
  )
}