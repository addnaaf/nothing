import { Metadata } from "next"
import Link from "next/link"
import { motion } from "framer-motion"

export const metadata: Metadata = {
  title: "Home",
  description: "Home page of Adna Fika Agestifanka portfolio",
}

export default function HomePage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-24 max-w-3xl"
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Hi, I'm <span className="text-primary">Adna Fika Agestifanka</span>.
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-neutral-400 mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        A passionate Frontend Engineer crafting delightful digital experiences.
      </motion.p>
      <motion.div
        className="flex gap-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Link
          href="/projects"
          className="px-6 py-3 bg-primary rounded-md text-white font-medium hover:opacity-90 transition"
        >
          View Projects
        </Link>
        <Link
          href="/about"
          className="px-6 py-3 border border-neutral-600 rounded-md font-medium hover:bg-neutral-800 transition"
        >
          About Me
        </Link>
      </motion.div>
    </motion.main>
  )
}