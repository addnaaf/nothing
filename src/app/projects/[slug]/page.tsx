import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { ProjectDetail } from '@/components/project-detail'
import { getProjectBySlug, getAllProjects } from '@/lib/projects'

interface ProjectPageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  const projects = await getAllProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: 'Project Not Found - Adna Fika Agestifanka',
      description: 'The requested project could not be found.',
    }
  }

  return {
    title: `${project.title} - Adna Fika Agestifanka`,
    description: project.description,
    keywords: project.tags,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <ProjectDetail project={project} />
    </div>
  )
}