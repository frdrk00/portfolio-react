import { AnimatePresence } from 'framer-motion'
import {
  Header,
  Home,
  ServiceCount,
  About,
  Skills,
  Projects,
  Contact,
  ParticlesContainer,
} from '../containers'
import { HomeSocialLinks } from '../components'
import { Socials } from '../utils/helper'

const App = () => {
  return (
    <div className="w-full xl:w-[1600px] py-32 px-4 lg:px-12 pr-4 lg:pr-32">
      {/* Particles Container */}
      <ParticlesContainer />

      {/* Header */}
      <Header />

      {/* Home Container */}
      <Home />

      {/* Services count cards */}
      <ServiceCount />

      {/* About Container */}
      <About />

      {/* Skills Container */}
      <Skills />

      {/* Projects Container */}
      <Projects />

      {/* Contact Container */}
      <Contact />

      {/* Footer */}
      <div className="w-full flex flex-col items-center justify-start mt-32 mb-12">
        <p className="text-3xl tracking-wide text-texlight">
          Frederik Rybansky
        </p>

        <div className="flex items-center justify-center gap-16 mt-16">
          <AnimatePresence>
            {Socials &&
              Socials.map((item, index) => (
                <HomeSocialLinks key={index} data={item} index={index} />
              ))}
          </AnimatePresence>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 mt-12">
          <p className="text-texlight text-center max-sm:my-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            molestias minima, incidunt eius tempore tenetur animi est ut
            voluptates aperiam expedita ea. Quo velit repellat inventore aut
            doloremque vitae exercitationem molestias.
          </p>
          <p className="text-texlight text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            molestias minima, incidunt eius tempore tenetur animi est ut
            voluptates aperiam expedita ea, reiciendis corrupti libero minus.
            Quo velit.
          </p>

          <div className="w-full flex flex-col items-center justify-center gap-3 max-sm:mt-8">
            <p className="text-texlight text-center">
              frederik.rbnsk@gmail.com
            </p>
            <p className="text-texlight text-center">+421 940 807 580</p>
            <a href="#">
              <p className="text-primary text-center cursor-pointer">Hire Me</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
