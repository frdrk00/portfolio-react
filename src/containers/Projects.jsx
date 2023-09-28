import { motion, AnimatePresence } from 'framer-motion'
import { Leaf1, Leaf2 } from '../assets'
import { ProjectsData } from '../utils/helper'
import { FaGithub } from 'react-icons/fa6'
import { useState } from 'react'

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex items-center justify-center flex-col gap-12 my-12"
    >
      {/* title */}
      <div className="w-full flex items-center justify-center py-24">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-around w-52"
        >
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary capitalize text-xl font-serif tracking-widest">
            Projects
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>

      {/* main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
        <AnimatePresence>
          {ProjectsData &&
            ProjectsData.map((project, index) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </AnimatePresence>
      </div>
    </section>
  )
}

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      key={project.id}
      className="overflow-hidden cursor-pointer relative rounded-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.img
        whileHover={{ scale: 1.1 }}
        className="w-full h-full max-h-44 object-cover rounded-lg"
        src={project.imgSrc}
      />

      {isHovered && (
        <motion.div className="absolute inset-0 backdrop-blur-md bg-[rgba(0,0,0,0.6)] flex flex-col items-center text-center justify-center gap-2">
          <p className="text-xl text-primary">{project?.name}</p>
          <div className="flex items-center justify-center flex-row space-x-2">
            <a href={project.gitURL}>
              <FaGithub className="text-3xl text-white hover:text-primary" />
            </a>
            <a
              href={project.demoURL}
              style={{ boxShadow: 'inset 0px 0px 10px rgba(255,255,255,0.3)' }}
              className="border border-[rgba(255,255,255,0.3)] rounded-xl px-8 py-3 active:95 group hover:border-primary"
            >
              <p className="text-texlight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary">
                Demo
              </p>
            </a>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Projects
