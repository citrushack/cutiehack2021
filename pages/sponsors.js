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
    <main className={sponsorsStyles.main}>
      <div className={styles.sponsors}>
        <h1>Sponsors</h1>
        <p>Those who made this hackathon possible.</p>
        <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
          {/* "sponser us" form */}
          <a href="#">
            <div className={sponsorsStyles.button}>
              <div className={sponsorsStyles.iconTextWrapper}>
                <div>Sponsor Us</div> 
                <FaChevronRight className={sponsorsStyles.arrow} />
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
