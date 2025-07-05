import { notFound } from "next/navigation"
import { getProjectSlugs, getProjectBySlug } from "../../../lib/projects"
import type { Metadata } from "next"

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = getProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getProjectBySlug(params.slug).catch(() => null)
  if (!data) return {}
  return {
    title: data.meta.title,
    description: data.meta.description,
  }
}

export default async function ProjectPage({ params }: Props) {
  const data = await getProjectBySlug(params.slug).catch(() => null)

  if (!data) notFound()

  return (
    <main className="container mx-auto px-4 py-24 max-w-3xl prose dark:prose-invert">
      <h1 className="mb-2">{data!.meta.title}</h1>
      <p className="text-neutral-400 mb-8">{data!.meta.description}</p>
      {/* @ts-expect-error Server Component */}
      <data.content />
    </main>
  )
}