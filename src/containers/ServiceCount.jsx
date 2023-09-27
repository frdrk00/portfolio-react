import { ServiceCard } from '../components'

const ServiceCount = () => {
  return (
    <div className="w-full py-6 lg:py-24 mt-24 flex items-center justify-center flex-wrap gap-8">
      <ServiceCard count={'1+ Years'} text={'Programmer Life'} />
      <ServiceCard count={'2000+ Hours'} text={'Coding Time'} />
      <ServiceCard count={'50+'} text={'Public Projects'} />
      <ServiceCard count={'40+'} text={'Full-Stack Projects'} />
    </div>
  )
}

export default ServiceCount
