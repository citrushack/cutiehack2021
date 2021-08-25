import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { FaChevronRight } from 'react-icons/fa'

import styles from '../styles/Help.module.css'

export default function Help() {
  const [isMobile, setIsMobile] = useState(false)
  var buttonVariants = {}
  if (!isMobile)
    buttonVariants = {
      hover: { scale: 1.05 },
      tap: { scale: 0.995 },
    }

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 720)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })

  return (
    <section className={styles.section}>
      <div className={styles.wave}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className={styles.shapefill}
          ></path>
        </svg>
      </div>
      <div className={styles.mainContent}>
        <h1>get involved</h1>
        <h3 className={styles.content}>
          Not interested in hacking but still want to participate? Great! We
          would love to have you on board. Fill out the forms below if you&#39;d
          like to help hackers throughout the day.
        </h3>
        <p>
          <b>Mentors</b>
          <br />
          Mentors are in charge of helping the hackers with new technologies and
          working through any bugs or obstacles they encounter. We recommend
          this position if you are well versed in a particular stack to offer
          the best guidance.
        </p>
        <p>
          <b>Volunteers</b>
          <br />
          Volunteers help out with the majority of the day-of event including
          but not limited to matching hackers to mentors, helping hackers find
          teams, hosting activities, and answering general questions.
        </p>
        <p>
          <b>Sponsors</b>
          <br />
          Sponsors are companies/individuals that want to help Cutie Hack and
          Citrus Hack come to life! If you are interested in contributing,
          please don&#39;t hesitate to contact us!
        </p>
        {/* <div className={styles.buttonWrapper}>
          <Link passHref href="/">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              transition={{ ease: 'easeInOut', duration: 0.015 }}
              className={styles.button}
            >
              <span>mentors</span>
              <FaChevronRight className={styles.arrow} />
            </motion.button>
          </Link>
          <Link passHref href="/">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              transition={{ ease: 'easeInOut', duration: 0.015 }}
              className={styles.button}
            >
              <span>volunteers</span>
              <FaChevronRight className={styles.arrow} />
            </motion.button>
          </Link>
          <Link passHref href="/">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              transition={{ ease: 'easeInOut', duration: 0.015 }}
              className={styles.button}
            >
              <span>sponsor</span>
              <FaChevronRight className={styles.arrow} />
            </motion.button>
          </Link>
        </div> */}
      </div>
    </section>
  )
}
