import { motion } from 'framer-motion'
import { Leaf1, Leaf2 } from '../assets'
import { SkillCard } from '../components'
import { useTranslation } from 'react-i18next'

const Skills = () => {
  const { t } = useTranslation()

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
            {t('skills_title')}
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>

      {/* main content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {/* content section */}
        <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary capitalize text-xl font-serif tracking-widest">
            {t('skills_my_skills_work_experience')}
          </p>
          <p className="text-texlight text-base tracking-wide text-justify mb-10">
            {t('skills_list_1')}
            <br /> {t('skills_list_2')}
            <br /> {t('skills_list_3')}
            <br /> {t('skills_list_4')}
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            {t('skills_collaborative_platforms')}
          </p>
        </div>

        {/* image section */}
        <div className="w-full flex flex-col gap-4 items-center justify-center px-8 max-sm:text-xs max-sm:mt-8">
          <SkillCard
            skill={'React & Next.js'}
            percentage={'60%'}
            color={'#70e2ff'}
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
            color={'#3f62fd'}
            move={true}
          />
          <SkillCard
            skill={'Node.js & Express.js'}
            percentage={'70%'}
            color={'#89ff79'}
          />
          <SkillCard
            skill={'MongoDB & Firebase & AWS'}
            percentage={'75%'}
            color={'#ff7474'}
            move={true}
          />
        </div>
      </div>
    </section>
  )
}

export default Skills
