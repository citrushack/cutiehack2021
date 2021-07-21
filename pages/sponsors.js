import React from 'react'
import { motion } from 'framer-motion'

import { FaChevronRight } from 'react-icons/fa'

import styles from '../styles/Index.module.css'
import sponsorsStyles from '../styles/Sponsors.module.css'

export default function Sponsors() {
  return (
    <main className={styles.main}>
      <div className={styles.sponsors}>
        <h1>Sponsors</h1>
        <p>Those who made this hackathon possible.</p>
        <motion.div whileTap={{ scale: 0.9 }}>
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
