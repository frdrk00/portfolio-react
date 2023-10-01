import { useTranslation } from 'react-i18next'
import { ServiceCard } from '../components'

const ServiceCount = () => {
  const { t } = useTranslation()
  return (
    <div className="w-full py-6 lg:py-24 mt-24 max-sm:mt-10 flex items-center justify-center flex-wrap gap-8">
      <ServiceCard
        count={t('service_count_programmer_life')}
        text={t('service_card_programmer_life')}
      />
      <ServiceCard
        count={t('service_count_coding_time')}
        text={t('service_card_coding_time')}
      />
      <ServiceCard
        count={t('service_count_public_projects')}
        text={t('service_card_public_projects')}
      />
      <ServiceCard
        count={t('service_count_full_stack_projects')}
        text={t('service_card_full_stack_projects')}
      />
    </div>
  )
}

export default ServiceCount
