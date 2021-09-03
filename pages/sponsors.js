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
        <div className={styles.grid}>
          <div>
          <img src="https://picsum.photos/200?random" width="300" height="250" alt="placeholder"></img>
          <img src="https://picsum.photos/200?random" width="300" height="250" alt="placeholder"></img>
          </div>
          <div>
          <img src="https://picsum.photos/200?random" width="200" height="150" alt="placeholder"></img>
          <img src="https://picsum.photos/200?random" width="200" height="150" alt="placeholder"></img>
          <img src="https://picsum.photos/200?random" width="200" height="150" alt="placeholder"></img>
          <img src="https://picsum.photos/200?random" width="200" height="150" alt="placeholder"></img>
          </div>
          <div>
          <img src="https://picsum.photos/200?random" width="200" height="150" alt="placeholder"></img>
          <img src="https://picsum.photos/200?random" width="200" height="150" alt="placeholder"></img>
          <img src="https://picsum.photos/200?random" width="200" height="150" alt="placeholder"></img>
          <img src="https://picsum.photos/200?random" width="200" height="150" alt="placeholder"></img>
          </div>
          <div>
          <img src="https://picsum.photos/200?random" width="150" height="100" alt="placeholder"></img>
          <img src="https://picsum.photos/200?random" width="150" height="100" alt="placeholder"></img>
          <img src="https://picsum.photos/200?random" width="150" height="100" alt="placeholder"></img>
          <img src="https://picsum.photos/200?random" width="150" height="100" alt="placeholder"></img>
          </div>
          <div>
          <img src="https://picsum.photos/200?random" width="150" height="100" alt="placeholder"></img>
          <img src="https://picsum.photos/200?random" width="150" height="100" alt="placeholder"></img>
          <img src="https://picsum.photos/200?random" width="150" height="100" alt="placeholder"></img>
          <img src="https://picsum.photos/200?random" width="150" height="100" alt="placeholder"></img>
          </div>
        </div>
      </div>
    </section>
  )
}
