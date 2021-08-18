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
      <h1>get involved</h1>
      <h3 className={styles.content}>
        Not interested in hacking but still want to participate? Great! We would
        love to have you on board. Fill out the forms below if you&#39;d like to
        help hackers throughout the day.
      </h3>
      <div className={styles.buttonWrapper}>
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
            <span>sponsor us</span>
            <FaChevronRight className={styles.arrow} />
          </motion.button>
        </Link>
      </div>
    </section>
  )
}
