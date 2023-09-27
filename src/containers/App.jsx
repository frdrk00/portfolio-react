import { Header, Home, ServiceCount, About, Skills } from '../containers'

const App = () => {
  return (
    <div className="w-full xl:w-[1600px] py-32 px-4 lg:px-12 pr-4 lg:pr-32">
      {/* Particles Container */}

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

      {/* Contact Container */}

      {/* Footer */}
    </div>
  )
}

export default App
