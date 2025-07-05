import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface Project {
  slug: string
  title: string
  description: string
  tags: string[]
  date: string
  content: string
}

const projectsDirectory = path.join(process.cwd(), 'content/projects')

export async function getAllProjects(): Promise<Project[]> {
  try {
    const fileNames = fs.readdirSync(projectsDirectory)
    const projects = fileNames
      .filter((name) => name.endsWith('.mdx'))
      .map((name) => {
        const slug = name.replace(/\.mdx$/, '')
        const fullPath = path.join(projectsDirectory, name)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
          slug,
          title: data.title || 'Untitled',
          description: data.description || '',
          tags: data.tags || [],
          date: data.date || new Date().toISOString(),
          content,
        }
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return projects
  } catch (error) {
    console.error('Error loading projects:', error)
    return []
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || 'Untitled',
      description: data.description || '',
      tags: data.tags || [],
      date: data.date || new Date().toISOString(),
      content,
    }
  } catch (error) {
    console.error(`Error loading project ${slug}:`, error)
    return null
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getAllProjects()
  return projects.slice(0, 3)
}