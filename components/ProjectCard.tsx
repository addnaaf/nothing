"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ProjectMeta } from "../lib/projects"

export default function ProjectCard({ project }: { project: ProjectMeta }) {
  return (
    <motion.article
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.4 }}
      className="border border-neutral-700 rounded-lg p-6 hover:border-primary transition-colors"
    >
      <h2 className="text-2xl font-semibold mb-2">
        <Link href={`/projects/${project.slug}`}>{project.title}</Link>
      </h2>
      <p className="text-neutral-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-neutral-800 px-2 py-1 rounded-md text-neutral-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  )
}