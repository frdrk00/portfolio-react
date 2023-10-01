import { motion } from 'framer-motion'
import { Leaf1, Leaf2 } from '../assets'
import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../config/firebase.config'
import { Alert } from './'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation()

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })
  const [alert, setAlert] = useState({
    isAlert: false,
    message: '',
    status: null,
  })

  const handleTextChange = (e) => {
    const { name, value } = e.target

    // update the state for the corresponding input values
    setData((prevData) => ({ ...prevData, [name]: value }))
  }

  const sendMessage = async () => {
    if (data.email === '' || data.email === null) {
      setAlert({
        isAlert: true,
        message: 'Required fields cannot be empty',
        status: 'warning',
      })

      setInterval(() => {
        setAlert({
          isAlert: false,
          message: '',
          status: null,
        })
      }, 4000)
    } else {
      await addDoc(collection(db, 'messages'), { ...data })
        .then(() => {
          setData({
            firstName: '',
            lastName: '',
            email: '',
            message: '',
          })
          setAlert({
            isAlert: true,
            message: 'Thanks for your message!',
            status: 'success',
          })

          setInterval(() => {
            setAlert({
              isAlert: false,
              message: '',
              status: null,
            })
          }, 4000)
        })
        .catch((err) => {
          console.log(err)
          setAlert({
            isAlert: true,
            message: `Error: ${err.message}`,
            status: 'danger',
          })

          setInterval(() => {
            setAlert({
              isAlert: false,
              message: '',
              status: null,
            })
          }, 4000)
        })
    }
  }

  return (
    <section
      id="contact"
      className="flex items-center justify-center flex-col gap-12 my-12 max-sm:my-0"
    >
      {/* Toast Alert notification */}
      {alert.isAlert && <Alert status={alert.status} message={alert.message} />}

      {/* title */}
      <div className="w-full flex items-center justify-center py-24 max-sm:py-8">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-around w-52"
        >
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary capitalize text-xl font-serif tracking-widest">
            {t('contact_title')}
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>

      {/* main content */}
      <div className="w-full flex flex-col items-center justify-start gap-4"></div>
      <div className="w-full lg:w-[600px] p-2 flex flex-col items-center justify-start gap-4">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            value={data.firstName}
            onChange={handleTextChange}
            placeholder={t('contact_first_name')}
            className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent outline-none focus:border-primary text-texlight"
          />
          <input
            type="text"
            name="lastName"
            value={data.lastName}
            onChange={handleTextChange}
            placeholder={t('contact_last_name')}
            className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent outline-none focus:border-primary text-texlight"
          />
        </div>

        {/* Email field */}
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleTextChange}
          placeholder={t('contact_email')}
          className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent outline-none focus:border-primary text-texlight"
        />
        <textarea
          name="message"
          id=""
          cols="0"
          rows="10"
          value={data.message}
          onChange={handleTextChange}
          placeholder={t('contact_message_placeholder')}
          className="w-full px-4 py-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-transparent outline-none focus:border-primary text-texlight"
        ></textarea>
        <div className="w-full flex items-center justify-center lg:justify-end">
          <button
            className="px-12 py-3 bg-gradient-to-br from-primary to-secondary rounded-md w-full lg:w-auto hover:bg-gradient-to-br hover:from-black hover:to-black hover:border hover:border-primary hover:text-primary"
            onClick={sendMessage}
          >
            {t('contact_send_button')}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Contact
