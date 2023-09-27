import { AnimatePresence, motion } from 'framer-motion'
import { Hero } from '../assets'
import { HeroTypeWritter, HomeSocialLinks } from '../components'
import { Socials } from '../utils/helper'

const Home = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center flex-col gap-12 relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {/* content section */}
        <div className="w-full h-full flex flex-col items-center lg:items-start justify-center gap-4">
          <h2 className="text-3xl lg:text-4xl text-texlight">
            Hello, I'm{' '}
            <span className="block tracking-wider text-4xl lg:text-6xl mt-4 text-white">
              Frederik.
            </span>
          </h2>

          {/* typewritter */}
          <h2 className="text-2xl lg:text-4xl text-texlight mt-4">
            And I'm{' '}
            <HeroTypeWritter
              words={['a Developer..', 'a Freelancer..']}
              speed={100}
            />
          </h2>

          <p className="text-base text-texlight mt-6 text-center lg:text-left">
            I am a 28-year-old Slovakian who discovered a new passion in life.
            It is programming and learning new technologies. This flexible
            online job offers me the freedom and time to code, to which I am
            devoting most of my energy, as I see great importance in this skill.
            I would love to meet new ambitious people in the coding field with
            whom we can move forward and create something significant together.
          </p>
          {/* social media links */}
          <div className="flex items-center justify-center gap-16 mt-16">
            <AnimatePresence>
              {Socials &&
                Socials.map((item, index) => (
                  <HomeSocialLinks key={index} data={item} index={index} />
                ))}
            </AnimatePresence>
          </div>

          {/* hire me */}
          <a
            href="#"
            style={{ boxShadow: 'inset 0px 0px 10px rgba(255,255,255,0.3)' }}
            className="mt-12 border border-[rgba(255,255,255,0.3)] rounded-xl px-8 py-3 active:95 group hover:border-primary"
          >
            <p className="text-texlight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary">
              Hire Me
            </p>
          </a>
          <button className=""></button>
        </div>

        {/* hero image */}
        <div className="w-full h-full flex items-center justify-start lg:justify-center">
          <motion.img
            initial={{ y: 0 }}
            animate={{
              x: [0, 10, -10, 10, -10, 0],
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
