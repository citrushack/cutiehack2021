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
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <h1 className={styles.header}>Sponsors</h1>
        <p>Those who made this hackathon possible.</p>
        <Link passHref href="/">
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            transition={{ ease: 'easeInOut', duration: 0.015 }}
            className={styles.button}
          >
            <div className={styles.iconTextWrapper}>
              <div>Sponsor Us</div>
              <FaChevronRight className={styles.arrow} />
            </div>
          </motion.div>
        </Link>
        <div>
          {/* sponsor logos */}
          <a href="#"></a>
        </div>
      </div>
    </main>
  )
}
