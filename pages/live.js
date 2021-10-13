import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Element } from 'react-scroll'
import CountdownWrapper from '../components/Countdown'
import Sponsors from '../pages/sponsors'
import Team from '../pages/team'
import { FaChevronRight } from 'react-icons/fa'

import styles from '../styles/Live.module.css'

export default function Live() {
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
    <>
      <Head>
        <title>Cutie Hack | Live</title>
      </Head>
      <section className={styles.section}>
        <CountdownWrapper
          date="2021-11-06T21:00:00"
          heading="time left until hacking ends"
        />
      </section>
      <Element name="Schedule" className={styles.element}>
        <section className={styles.section2}>
          <div className={styles.wave2}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className={styles.shapefill}
              ></path>
            </svg>
          </div>
          <h1>schedule</h1>
          
        </section>
      </Element>
      <Element name="Judges" className={styles.element}>
        <section className={styles.section3}>
          <div className={styles.wave3}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className={styles.shapefill}
              ></path>
            </svg>
          </div>
          <h1>judges</h1>
          
        </section>
      </Element>
      <Element name="Resources" className={styles.element}>
        <section className={styles.section4}>
          <div className={styles.wave4}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className={styles.shapefill}
              ></path>
            </svg>
          </div>
          <h1>resources</h1>
          <div className={styles.buttonWrapper}>
            <Link passHref href="/">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                transition={{ ease: 'easeInOut', duration: 0.015 }}
                className={styles.button}
              >
                <span>devpost</span>
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
                <span>github</span>
                <FaChevronRight className={styles.arrow} />
              </motion.button>
            </Link>
            <Link
              passHref
              href="/"
            >
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                transition={{ ease: 'easeInOut', duration: 0.015 }}
                className={styles.button}
              >
                <span>discord</span>
                <FaChevronRight className={styles.arrow} />
              </motion.button>
            </Link>
          </div>
        </section>
      </Element>
      <Element name="Sponsors" className={styles.element}>
        <Sponsors />
      </Element>
      <Element name="Team" className={styles.element}>
        <Team />
      </Element>
    </>
  )
}
