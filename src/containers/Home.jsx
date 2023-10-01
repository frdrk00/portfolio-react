import {  motion } from 'framer-motion'
import { Hero } from '../assets'
import { HeroTypeWritter } from '../components'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()

  return (
    <section
      id="home"
      className="flex items-center justify-center flex-col gap-12 relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {/* content section */}
        <div className="w-full h-full flex flex-col items-center lg:items-start justify-center gap-4">
          <h2 className="text-3xl lg:text-4xl text-texlight">
            {t('home_i_am')}{' '}
            <span className="block tracking-wider text-4xl lg:text-6xl mt-4 text-white">
              Frederik.
            </span>
          </h2>

          {/* typewriter */}
          <h2 className="text-2xl lg:text-4xl text-texlight mt-4">
            {t('home_and_i_am')}{' '}
            <HeroTypeWritter
              words={['a Developer..', 'a Freelancer..']}
              speed={100}
            />
          </h2>

          <p className="max-sm:hidden text-base text-texlight mt-6 text-center lg:text-left ">
            {t('home_full_stack_developer')}
            <br />
            <br />
            {t('home_experience')}
          </p>

          {/* hire me */}
          <div className="flex flex-row space-x-4 w-full h-auto mt-12 max-sm:mt-4">
            <a
              href="#contact"
              style={{ boxShadow: 'inset 0px 0px 10px rgba(255,255,255,0.3)' }}
              className="max-sm:w-full  border border-[rgba(255,255,255,0.3)] rounded-xl px-8 max-sm:px-4 py-3 active:95 group hover:border-primary"
            >
              <p className="text-texlight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary max-sm:text-center">
                {t('home_hire_me')}
              </p>
            </a>

            <button className="max-sm:px-2 px-8  py-3 bg-gradient-to-br from-primary to-secondary rounded-xl h-auto w-full lg:w-auto hover:bg-gradient-to-br hover:from-black hover:to-black hover:border hover:border-primary hover:text-primary active:95">
              <a href="/Frederik-Rybansky-CV.pdf">
                <p className="font-semibold">{t('home_download_cv')}</p>
              </a>
            </button>
          </div>
        </div>
        {/* hero image */}
        <div className="w-full h-full flex items-center justify-start lg:justify-center max-sm:mt-4">
          <motion.img
            initial={{ y: 0 }}
            animate={{
              y: [-10, 10, -10],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: 'linear',
            }}
            src={Hero}
            className="w-auto h-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default Home
