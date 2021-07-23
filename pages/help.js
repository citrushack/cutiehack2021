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
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <h1 className={styles.header}>Get Involved</h1>
        <p>
          Not interested in hacking but still want to participate? Fill out the
          forms below if you`&apos;`d like to help hackers throughout the day.
        </p>
        <div className={styles.buttonWrapper}>
          <Link passHref href="/">
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              transition={{ ease: 'easeInOut', duration: 0.015 }}
              className={styles.button}
            >
              <div className={styles.iconTextWrapper}>
                <div>Mentors</div>
                <FaChevronRight className={styles.arrow} />
              </div>
            </motion.div>
          </Link>
          <Link passHref href="/">
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              transition={{ ease: 'easeInOut', duration: 0.015 }}
              className={styles.button}
            >
              <div className={styles.iconTextWrapper}>
                <div>Volunteers</div>
                <FaChevronRight className={styles.arrow} />
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </main>
  )
}
