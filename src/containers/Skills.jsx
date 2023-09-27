import { motion, AnimatePresence } from 'framer-motion'
import { Leaf1, Leaf2, about } from '../assets'
import { SkillCard } from '../components'

const Skills = () => {
  return (
    <section
      id="skills"
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
          <p className="text-texlight text-base tracking-wide text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            sit nostrum laborum non, inventore perspiciatis nesciunt. Eius
            suscipit nam, eum nihil, odit velit impedit aspernatur architecto
            quas voluptatum molestiae, debitis facilis sapiente est ex aperiam!
            Veniam, deleniti tempora autem unde facere temporibus dolorum quos
            error in ipsam.
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            sit nostrum laborum non, inventore perspiciatis nesciunt. Eius
            suscipit nam, eum nihil, odit velit impedit aspernatur architecto
            quas voluptatum molestiae.
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            temporibus, illum inventore a magnam ab, dolorem nisi aut deleniti,
            cum laborum distinctio at expedita? Ut voluptatibus sit incidunt
            necessitatibus enim distinctio.
          </p>
        </div>

        {/* image section */}
        <div className="w-full flex flex-col gap-4 items-center justify-center px-8">
          <SkillCard
            skill={'HTML5 & CSS3'}
            percentage={'98%'}
            color={'#f93fff'}
            move={true}
          />
          <SkillCard
            skill={'Javascript'}
            percentage={'80%'}
            color={'#fcff3f'}
          />
          <SkillCard
            skill={'Typescript'}
            percentage={'50%'}
            color={'#55ff3f'}
            move={true}
          />
          <SkillCard
            skill={'React & Next.js'}
            percentage={'90%'}
            color={'#FF3F3F'}
          />
          <SkillCard
            skill={'Node.js'}
            percentage={'70%'}
            color={'#3fd9ff'}
            move={true}
          />
          <SkillCard
            skill={'MongoDB & Firebase & AWS'}
            percentage={'80%'}
            color={'#523fff'}
          />
        </div>
      </div>
    </section>
  )
}

export default Skills
