import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { EN, SK } from '../assets'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const [isMounted, setIsMounted] = useState(false)

  return (
    <>
      <div className="flex flex-row items-center right-1 ">
        {isMounted ? (
          <button
            onClick={() => {
              i18n.changeLanguage('en')
              setIsMounted(false)
            }}
          >
            <img
              src={EN}
              className="w-16 h-16 rounded-full object-contain"
              alt=""
            />
          </button>
        ) : (
          <button
            onClick={() => {
              i18n.changeLanguage('sk')
              setIsMounted(true)
            }}
          >
            <img
              src={SK}
              className="w-16 h-16 rounded-full object-contain"
              alt=""
            />
          </button>
        )}
      </div>
    </>
  )
}

export default LanguageSwitcher
