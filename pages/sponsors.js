import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { FaChevronRight } from 'react-icons/fa'

import styles from '../styles/Index.module.css'
import sponsorsStyles from '../styles/Sponsors.module.css'

export default function Sponsors() {
  const [isMobile, setIsMobile] = useState(false)
  var buttonVariants = {}
  if (!isMobile)
    buttonVariants = {
      hover: { scale: 1.02 },
      tap: { scale: 0.997 }
    }

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 720)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })

  return (
    <main className={styles.main}>
      <div className={styles.sponsors}>
        <h1>Sponsors</h1>
        <p>Those who made this hackathon possible.</p>
        <motion.div 
          variants={buttonVariants}
          whileTap="tap"
        >
          {/* "sponser us" form */}
          <a href="#">
            <div className={sponsorsStyles.icon}>
              <div className={sponsorsStyles.iconTextWrapper}>
                Sponsor Us <FaChevronRight className={sponsorsStyles.arrow} />
              </div>
            </div>
          </a>
        </motion.div>
        <div>
          {/* sponsor logos */}
          <a href="#"></a>
        </div>
      </div>
    </main>
  )
}
