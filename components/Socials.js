import React from 'react'
import { motion } from 'framer-motion'
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'

import socialsStyles from '../styles/Socials.module.css'

export default function Socials() {
  return (
    <div className={socialsStyles.stack}>
      <a href="https://www.facebook.com/cutiehack/">
        <motion.div whileHover={{ width: 300 }} className={socialsStyles.wrapper}>
          <div><IoLogoFacebook className={socialsStyles.icon} /></div>
          <div className={socialsStyles.caption}>Check out our Facebook!</div>
        </motion.div>
      </a>
      
      <a href="https://www.instagram.com/cutiehack_ucr/">
        <motion.div whileHover={{ width: 305 }} className={socialsStyles.wrapper}>
          <div><IoLogoInstagram className={socialsStyles.icon} /></div>
          <div className={socialsStyles.caption}>Check out our Instagram!</div>
        </motion.div>
      </a>
      <a href="https://www.linkedin.com/company/17907222/admin/">
        <motion.div whileHover={{ width: 290 }} className={socialsStyles.wrapper}>
          <div><IoLogoLinkedin className={socialsStyles.icon} /></div>
          <div className={socialsStyles.caption}>Check out our LinkedIn!</div>
        </motion.div>
      </a>
    </div>
  )
}