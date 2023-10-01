import { AnimatePresence } from 'framer-motion'
import { HomeSocialLinks } from '../components'
import { Socials } from '../utils/helper'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <div className="w-full flex flex-col items-center justify-start mt-32 mb-12 max-sm:mt-20">
      <p className="text-3xl tracking-wide text-texlight">{t('footer_name')}</p>

      <div className="flex items-center justify-center gap-16 mt-16">
        <AnimatePresence>
          {Socials &&
            Socials.map((item, index) => (
              <HomeSocialLinks key={index} data={item} index={index} />
            ))}
        </AnimatePresence>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-3 mt-12 sm:space-x-4">
        <p className="text-texlight text-center max-sm:my-4">
          {t('footer_contact_info')}
        </p>
        <p className="text-texlight text-center">
          {t('footer_communication_info')}
        </p>

        <div className="w-full flex flex-col items-center justify-center gap-3 max-sm:mt-8">
          <p className="text-texlight text-center">{t('footer_email')}</p>
          <p className="text-texlight text-center">{t('footer_phone')}</p>
          <a href="#contact">
            <p className="text-primary text-center cursor-pointer max-sm:mb-20">
              {t('footer_hire_me')}
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
