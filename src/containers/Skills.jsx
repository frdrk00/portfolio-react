import { motion } from 'framer-motion'
import { Leaf1, Leaf2 } from '../assets'
import { SkillCard } from '../components'

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex items-center justify-center flex-col gap-12 my-12"
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
            Skills
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>

      {/* main content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {/* content section */}
        <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary capitalize text-xl font-serif tracking-widest">
            My Skills & Work Experience
          </p>
          <p className="text-texlight text-base tracking-wide text-justify mb-10">
            🔵 React.js + Next.js + React Native
            <br /> 🔵 JavaScript + TypeScript
            <br /> 🔵 Node.js, Express.js
            <br /> 🔵 MongoDB, Firebase, AWS
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            Collaborative team communication platforms
            <br /> like Slack, ClickUp & many more.
          </p>
        </div>

        {/* image section */}
        <div className="w-full flex flex-col gap-4 items-center justify-center px-8 max-sm:text-xs max-sm:mt-8">
          <SkillCard
            skill={'React & Next.js'}
            percentage={'60%'}
            color={'#ff7474'}
            move={true}
          />
          <SkillCard
            skill={'Javascript'}
            percentage={'80%'}
            color={'#fdff81'}
          />
          <SkillCard
            skill={'Typescript'}
            percentage={'50%'}
            color={'#89ff79'}
            move={true}
          />
          <SkillCard
            skill={'Node.js & Express.js'}
            percentage={'70%'}
            color={'#70e2ff'}
          />
          <SkillCard
            skill={'MongoDB & Firebase & AWS'}
            percentage={'75%'}
            color={'#8172ff'}
            move={true}
          />
        </div>
      </div>
    </section>
  )
}

export default Skills
