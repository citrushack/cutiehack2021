import React from 'react'
import { useRouter } from 'next/router'
import toast, { Toaster } from 'react-hot-toast'
import { nanoid } from 'nanoid'
import { motion } from 'framer-motion'
import styles from '../styles/Index.module.css'
import formStyles from '../styles/Form.module.css'

export default function CreateGroupForm() {
  const router = useRouter()

  const [error, setError] = React.useState(false)
  const [code, setCode] = React.useState()

  const handleChangeCode = (e) => {
    setError(false)
    setCode(e.target.value)
  }

  const join = (code) => {
    // check if code exists
    if (false) {
      setError(false)
      toast.success('Successfully joined group!')
      const dst = '/groups/' + code.toString()
      router.push(dst)
    } else {
      setError(true)
      toast.error('Group does not exist. Try again.')
    }
  }

  return (
    <section>
      {error ? (
        <div>
          <Toaster />
        </div>
      ) : null}
      <div className={formStyles.inputWrapper}>
        <div className={formStyles.inputHeader}>Invite Code</div>
        <input
          className={
            formStyles.inputBox && error
              ? `${formStyles.inputBox} ${formStyles.triggeredBox}`
              : `${formStyles.inputBox}`
          }
          value={code}
          onChange={handleChangeCode}
        />
      </div>
      <motion.button
        aria-label="Join Group Button"
        type="button"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.997 }}
        transition={{ ease: 'easeInOut', duration: 0.015 }}
        className={formStyles.button}
        onClick={() => join(code)}
      >
        Join Group
      </motion.button>
    </section>
  )
}
