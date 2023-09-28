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
      <Footer />
    </div>
  )
}

export default App
