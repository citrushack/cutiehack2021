import React, { useState, useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll'

import { VscTriangleUp } from 'react-icons/vsc'

import styles from '../styles/Scroll.module.css'

export default function TopScroll() {
  const [isMobile, setIsMobile] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
      const position = window.pageYOffset
      setScrollPosition(position)
  }

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 720)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    setIsMobile(window.innerWidth <= 720)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  })

  return (
    <div className={
      isMobile && scrollPosition > 360 
        ? `${styles.stack}`
        : `${styles.stack} ${styles.hide}`
      }
    >
      <div
        className={styles.wrapper}
        onClick={() => scroll.scrollToTop()}
      >
        <VscTriangleUp className={styles.icon} />
      </div>
    </div>
  )
}