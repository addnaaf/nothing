import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { ProjectsList } from '@/components/projects-list'
import { getAllProjects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Projects - Adna Fika Agestifanka',
  description: 'Explore the projects and work by Adna Fika Agestifanka, showcasing modern web development and design.',
}

export default async function ProjectsPage() {
  const projects = await getAllProjects()

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <ProjectsList projects={projects} />
    </div>
  )
}