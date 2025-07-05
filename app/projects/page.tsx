import { Metadata } from "next"
import { motion } from "framer-motion"
import { getAllProjectsMeta } from "../../lib/projects"
import ProjectCard from "../../components/ProjectCard"

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects by Adna Fika Agestifanka",
}

export default function ProjectsPage() {
  const projects = getAllProjectsMeta()

  return (
    <motion.main
      className="container mx-auto px-4 py-24 max-w-4xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-10">Projects</h1>
      <motion.div
        className="grid gap-6 md:grid-cols-2"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </motion.div>
    </motion.main>
  )
}