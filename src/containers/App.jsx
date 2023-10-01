import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { useTranslation } from 'react-i18next'

import translationEN from '../locales/en/translation.json'
import translationSK from '../locales/sk/translation.json'

import {
  Header,
  Home,
  ServiceCount,
  About,
  Skills,
  Projects,
  Contact,
  ParticlesContainer,
  Footer,
} from '../containers'

const resources = {
  en: {
    translation: translationEN,
  },
  sk: {
    translation: translationSK,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

const App = () => {
  const { t } = useTranslation()

  return (
    <div className="w-full xl:w-[1600px] py-32 max-sm:py-8 px-4 lg:px-12 pr-4 lg:pr-32">

      {/* Particles Container */}
      <ParticlesContainer />

      {/* Header */}
      <Header/>

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
      <Footer />
    </div>
  )
}

export default App
