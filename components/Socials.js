import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSession } from 'next-auth/client'

import {
  IoLogoDiscord,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
} from 'react-icons/io5'

import styles from '../styles/Socials.module.css'

export default function Socials() {
  const [session] = useSession()
  const [appStatus, setAppStatus] = useState('')

  const fetchData = async (id) => {
    const response = await fetch('/api/checkin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: id }),
    })
    const data = await response.json()
    if (data.checkins[0]) {
      setAppStatus(data.checkins[0].qualified)
    }
  }

  useEffect(() => {
    if (session) fetchData(session.user.id)
  }, [session])

  return (
    <div className={styles.stack}>
      { (session && appStatus === 'yes') &&
        <a target='_blank' rel='noopener noreferrer' href='https://discord.gg/CjkwAvFr2T'>
          <motion.div whileHover={{ width: 300 }} className={styles.wrapper}>
            <div><IoLogoDiscord className={styles.icon} /></div>
            <div className={styles.caption}>Join our Discord server!</div>
          </motion.div>
        </a>
      }
      <a target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/cutiehack/'>
        <motion.div whileHover={{ width: 300 }} className={styles.wrapper}>
          <div><IoLogoFacebook className={styles.icon} /></div>
          <div className={styles.caption}>Check out our Facebook!</div>
        </motion.div>
      </a>
      <a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/cutiehack_ucr/'>
        <motion.div whileHover={{ width: 305 }} className={styles.wrapper}>
          <div><IoLogoInstagram className={styles.icon} /></div>
          <div className={styles.caption}>Check out our Instagram!</div>
        </motion.div>
      </a>
      <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/company/17907222/admin/'>
        <motion.div whileHover={{ width: 290 }} className={styles.wrapper}>
          <div><IoLogoLinkedin className={styles.icon} /></div>
          <div className={styles.caption}>Check out our LinkedIn!</div>
        </motion.div>
      </a>
    </div>
  )
}