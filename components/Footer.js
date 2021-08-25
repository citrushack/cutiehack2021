import React from 'react'
import Link from 'next/link'

import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
} from 'react-icons/io5'

import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wave}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={styles.shapefill}
          ></path>
        </svg>
      </div>
      <div className={styles.socialWrapper}>
        <Link passHref href="https://www.facebook.com/cutiehack/">
          <div>
            <IoLogoFacebook className={styles.icon} />
          </div>
        </Link>

        <Link passHref href="https://www.instagram.com/cutiehack_ucr/">
          <div>
            <IoLogoInstagram className={styles.icon} />
          </div>
        </Link>
        <Link passHref href="https://www.linkedin.com/company/17907222/admin/">
          <div>
            <IoLogoLinkedin className={styles.icon} />
          </div>
        </Link>
      </div>
      <div className={styles.caption}>
        Made with 🧡 by the Citrus Hack Team.
      </div>
    </footer>
  )
}
