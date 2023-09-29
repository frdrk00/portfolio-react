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

          <p className="max-sm:hidden text-base text-texlight mt-6 text-center lg:text-left ">
            Full-stack developer from Nitra / Bratislava, Slovakia.
            <br /><br />I have more than 1,5 year of experience with web development<br />
            using JavaScript and Typescript, with React.js more than 1 year.
          </p>
          <p className='sm:hidden text-base text-texlight mt-6 text-center lg:text-left max-sm:text-sm'>
          Full-stack developer from Nitra / Bratislava, Slovakia.
            <br /><br />I have more than 1,5 year of experience with web development
            using JavaScript and Typescript, with React.js more than 1 year.
          </p>
          {/* social media links */}
          <div className="flex items-center justify-center gap-16 mt-16 max-sm:mt-8">
            <AnimatePresence>
              {Socials &&
                Socials.map((item, index) => (
                  <HomeSocialLinks key={index} data={item} index={index} />
                ))}
            </AnimatePresence>
          </div>

          {/* hire me */}
          <div className="flex flex-row space-x-4 w-full h-auto mt-12 max-sm:mt-4">
            <a
              href="#contact"
              style={{ boxShadow: 'inset 0px 0px 10px rgba(255,255,255,0.3)' }}
              className="max-sm:w-full  border border-[rgba(255,255,255,0.3)] rounded-xl px-8 max-sm:px-4 py-3 active:95 group hover:border-primary"
            >
              <p className="text-texlight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary max-sm:text-center">
                Hire Me
              </p>
            </a>

            <button className="max-sm:px-2 px-8  py-3 bg-gradient-to-br from-primary to-secondary rounded-xl h-auto w-full lg:w-auto hover:bg-gradient-to-br hover:from-black hover:to-black hover:border hover:border-primary hover:text-primary active:95">
              <a href="/Frederik-Rybansky-CV.pdf">
                <p className="font-semibold">Download CV</p>
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
