import React from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'

import styles from '../styles/Index.module.css'
import socialsStyles from '../styles/Socials.module.css'

export default function Socials() {
  return (
    <div className={socialsStyles.wrapper}>
      <a href="https://www.facebook.com/cutiehack/">
        <div className={styles.textIconWrapper}>
          <IoLogoFacebook className={styles.icon} />
        </div>
      </a>

      <a href="https://www.instagram.com/cutiehack_ucr/">
        <div className={styles.textIconWrapper}>
          <IoLogoInstagram className={styles.icon} />
        </div>
      </a>
      <a href="https://www.linkedin.com/company/17907222/admin/">
        <div className={styles.textIconWrapper}>
          <IoLogoLinkedin className={styles.icon} />
        </div>
      </a>
    </div>
  )
}