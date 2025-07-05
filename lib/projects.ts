import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { compileMDX } from "next-mdx-remote/rsc"

export interface ProjectMeta {
  slug: string
  title: string
  description: string
  tags: string[]
  date: string
}

const PROJECTS_PATH = path.join(process.cwd(), "content", "projects")

export function getProjectSlugs(): string[] {
  return fs
    .readdirSync(PROJECTS_PATH)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""))
}

export function getAllProjectsMeta(): ProjectMeta[] {
  const slugs = getProjectSlugs()
  const projects = slugs.map((slug) => {
    const raw = fs.readFileSync(path.join(PROJECTS_PATH, `${slug}.mdx`), "utf-8")
    const { data } = matter(raw)
    return {
      slug,
      title: data.title as string,
      description: data.description as string,
      tags: data.tags as string[],
      date: data.date as string,
    } satisfies ProjectMeta
  })

  return projects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export async function getProjectBySlug(slug: string) {
  const filePath = path.join(PROJECTS_PATH, `${slug}.mdx`)
  const source = fs.readFileSync(filePath, "utf-8")

  const { content, frontmatter } = await compileMDX<{
    title: string
    description: string
    tags: string[]
    date: string
  }>({
    source,
    options: { parseFrontmatter: true },
    components: {},
  })

  return {
    meta: {
      slug,
      title: frontmatter.title,
      description: frontmatter.description,
      tags: frontmatter.tags,
      date: frontmatter.date,
    } as ProjectMeta,
    content,
  }
}