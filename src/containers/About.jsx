import { motion } from 'framer-motion'
import { Leaf1, Leaf2, about } from '../assets'
const About = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center flex-col gap-12 max-sm:my-10"
    >
      {/* title */}
      <div className="w-full flex items-center justify-center py-24 max-sm:py-8">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-around w-52"
        >
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary capitalize text-xl font-serif tracking-widest">
            About
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>

      {/* main content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {/* image section */}
        <div className="w-full flex items-center justify-center px-8 max-sm:mb-4">
          <div className="w-full lg:w-96 p-[2px] rounded-md bg-gradient-to-br from-primary to-secondary relative">
            <img
              src={about}
              className="w-full rounded-md h-auto object-contain"
              alt=""
            />

            <div className="absolute w-full h-full -top-1 -left-1 bg-gradient-to-br from-primary to-secondary rounded-md blur-[5px] -z-10"></div>
          </div>
        </div>

        {/* content section */}
        <div className="w-full px-8 flex flex-col gap-4 items-start justify-start sm:mt-8">
          <p className="text-texlight text-base tracking-wide text-justify mb-6 max-sm:mb-2">
            I'm a 28-year-old Slovak, who discovered a new passion in life. It
            is programming and learning new technologies. This flexible online
            job offers me the freedom and time to code, to which I'm devoting
            most of my energy, as I see great importance in this skill. I would
            love to meet new ambitious people in the coding field with whom we
            can move forward and create something significant together.
          </p>
          <p className="text-texlight text-base tracking-wide text-justify mb-10 max-sm:mb-2">
            Proficient in effective communication, adept at problem-solving,
            quick to grasp new principles and technologies, and committed to
            continuous progress. Additionally, passionate about the field of AI.
          </p>
          <p className="text-texlight text-base tracking-wide text-justify mb-10">
            I follow current trends in web development and actively search for
            new technologies and practices that can help me build better
            applications and become a better developer.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
