import React from 'react'
import Link from 'next/link' 
import { motion } from 'framer-motion'

import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'

import styles from '../styles/Socials.module.css'

export default function Socials() {
  return (
    <div className={styles.stack}>
      <Link passHref href="https://www.facebook.com/cutiehack/">
        <motion.div whileHover={{ width: 300 }} className={styles.wrapper}>
          <div><IoLogoFacebook className={styles.icon} /></div>
          <div className={styles.caption}>Check out our Facebook!</div>
        </motion.div>
      </Link>
      
      <Link passHref href="https://www.instagram.com/cutiehack_ucr/">
        <motion.div whileHover={{ width: 305 }} className={styles.wrapper}>
          <div><IoLogoInstagram className={styles.icon} /></div>
          <div className={styles.caption}>Check out our Instagram!</div>
        </motion.div>
      </Link>
      <Link passHref href="https://www.linkedin.com/company/17907222/admin/">
        <motion.div whileHover={{ width: 290 }} className={styles.wrapper}>
          <div><IoLogoLinkedin className={styles.icon} /></div>
          <div className={styles.caption}>Check out our LinkedIn!</div>
        </motion.div>
      </Link>
    </div>
  )
}