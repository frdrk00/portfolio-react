import { motion } from 'framer-motion'
import { Leaf1, Leaf2 } from '../assets'
import { useTranslation } from 'react-i18next'
const About = () => {
  const { t } = useTranslation()
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
            {t('about_title')}
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>

        {/* content section */}
        <div className="w-full px-8 flex flex-col gap-4 items-start justify-start sm:mt-8">
          <p className="text-texlight text-base tracking-wide text-justify mb-6 max-sm:mb-2">
            {t('about_paragraph1')}
          </p>
          <p className="text-texlight text-base tracking-wide text-justify mb-10 max-sm:mb-2">
            {t('about_paragraph2')}
          </p>
          <p className="text-texlight text-base tracking-wide text-justify mb-10">
            {t('about_paragraph3')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
