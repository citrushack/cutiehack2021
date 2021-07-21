import React from 'react'

import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'

import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialWrapper}>
        <a href="https://www.facebook.com/cutiehack/">
          <div><IoLogoFacebook className={styles.icon} /></div>
        </a>
        
        <a href="https://www.instagram.com/cutiehack_ucr/">
          <div><IoLogoInstagram className={styles.icon} /></div>
        </a>
        <a href="https://www.linkedin.com/company/17907222/admin/">
          <div><IoLogoLinkedin className={styles.icon} /></div>
        </a>
      </div>
      <div className={styles.caption}>
        Made with ❤️ by the CitrusHack Team.
      </div>
    </footer>
  )
}
