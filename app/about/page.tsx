import { Metadata } from "next"
import { motion } from "framer-motion"

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Adna Fika Agestifanka",
}

export default function AboutPage() {
  return (
    <motion.main
      className="container mx-auto px-4 py-24 max-w-3xl leading-relaxed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <p className="mb-4">
        I'm Adna Fika Agestifanka, a frontend engineer with a keen eye for detail and a passion
        for crafting engaging, performant web applications. I enjoy working with modern
        technologies such as React, TypeScript, Tailwind CSS, and Next.js to deliver high-quality
        user experiences.
      </p>
      <p className="mb-4">
        In my spare time, I explore new tools, contribute to open-source, and share knowledge with
        the developer community.
      </p>
      <p>
        When I'm not coding, you can find me reading design blogs or taking photographs of nature.
      </p>
    </motion.main>
  )
}