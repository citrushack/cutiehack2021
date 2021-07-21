import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { HiPlus } from 'react-icons/hi'

import styles from '../styles/Accordion.module.css'

export default function FaqSection(props) {
  const [open, setOpen] = useState(false)

  const [isMobile, setIsMobile] = useState(false)
  var buttonVariants = {}
  if (!isMobile)
    buttonVariants = {
      hover: { scale: 1.005 }
    }

  const toggle = () => {
    setOpen(!open)
  }

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 720)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })

  return (
    <div
      className={
        open
          ? `${styles.accordionItem} ${styles.open}`
          : `${styles.accordionItem}`
      }
      onClick={() => toggle()}
    >
      <motion.div
        variants={buttonVariants}
        whileHover="hover"
        transition={{ ease: 'easeInOut', duration: 0.1 }}
        className={styles.accordionItemHeading}
      >
        <div className={styles.accordionItemButton}>
          <h3 className={styles.title}>{props.question}</h3>
          <HiPlus className={styles.arrow} />
        </div>
      </motion.div>
      <div className={styles.accordionItemPanel}>
        <p className={styles.answer}>{props.answer}</p>
      </div>
    </div>
  )
}
