import { AnimatePresence } from 'framer-motion'
import { HomeSocialLinks } from '../components'
import { Socials } from '../utils/helper'

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start mt-32 mb-12">
      <p className="text-3xl tracking-wide text-texlight">Frederik Rybansky</p>

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
          I'm ready to answer your questions or inquiries.
          <br /> I will look forward to any job offers.
        </p>
        <p className="text-texlight text-center">
          I usually communicate through LinkedIn, email, or mobile phone.
        </p>

        <div className="w-full flex flex-col items-center justify-center gap-3 max-sm:mt-8">
          <p className="text-texlight text-center">frederik.rbnsk@gmail.com</p>
          <p className="text-texlight text-center">+421 940 807 580</p>
          <a href="#contact">
            <p className="text-primary text-center cursor-pointer">Hire Me</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
