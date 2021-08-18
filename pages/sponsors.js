import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaChevronRight } from 'react-icons/fa'

import styles from '../styles/Sponsors.module.css'

export default function Sponsors() {
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
      <div className={styles.wrapper}>
        <h1>the sponsors</h1>
        <h3>Those who made this hackathon possible.</h3>
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
        <div>{/* sponsor logos */}</div>
      </div>
    </section>
  )
}
