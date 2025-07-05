'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Project } from '@/lib/projects'

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-8"
          >
            ← Back to Projects
          </Link>

          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <p className="text-sm text-muted-foreground">
              Published on {new Date(project.date).toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="whitespace-pre-wrap">
                {project.content}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              View More Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}