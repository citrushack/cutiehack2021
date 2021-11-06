import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaChevronRight } from 'react-icons/fa'

import Wolfram from '../public/assets/sponsors/wolfram_alpha.png'
import FedEx from '../public/assets/sponsors/fedex.png'
import Sketch from '../public/assets/sponsors/sketch.png'
import ACM from '../public/assets/sponsors/acm_ucr.png'
import IEEE from '../public/assets/sponsors/ieee.png'
import GCAP from '../public/assets/sponsors/gcap.png'
import Triad from '../public/assets/sponsors/triad.png'

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
      <div className={styles.wave}>
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
      <div className={styles.wrapper}>
        <h1>the sponsors</h1>
        <h3>Those who made this hackathon possible.</h3>
        <a target='_blank' rel='noopener noreferrer' href="/sponsorship-packet.pdf">
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            transition={{ ease: 'easeInOut', duration: 0.015 }}
            className={`${styles.button} ${styles.sponsorbutton}`}
          >
            <span>sponsor us</span>
            <FaChevronRight className={styles.arrow} />
          </motion.button>
        </a>
        <div className={styles.grid}>
          {/* <div className={styles.groupWrapper}>
            <h3>pomelo</h3>
            <div className={styles.group}>
              <div className={styles.largest}>
                <Link passHref href='https://www.wolframalpha.com/'>
                  <motion.div 
                    variants={buttonVariants}
                    whileHover='hover'
                    whileTap='tap'
                    transition={{ ease: 'easeInOut', duration: 0.015 }}
                    className={styles.sponsor}
                  >
                    <Image
                      src={WolframAlpha}
                      width={1973}
                      height={699}
                      layout='responsive'
                      objectFit='contain'
                      quality={100}
                      alt='placeholder'
                    />
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.groupWrapper}>
            <h3>orange</h3>
            <div className={styles.group}>
              <div className={styles.large}>
                <Link passHref href='https://www.wolframalpha.com/'>
                  <motion.div 
                    variants={buttonVariants}
                    whileHover='hover'
                    whileTap='tap'
                    transition={{ ease: 'easeInOut', duration: 0.015 }}
                    className={styles.sponsor}
                  >
                    <Image
                      src={WolframAlpha}
                      width={1973}
                      height={699}
                      layout='responsive'
                      objectFit='contain'
                      quality={100}
                      alt='placeholder'
                    />
                  </motion.div>
                </Link>
              </div>
            </div>
          </div> */}
          <div className={styles.groupWrapper}>
            <h3>tangerine</h3>
            <div className={styles.group}>
              <div className={styles.large}>
                <motion.div 
                  variants={buttonVariants}
                  whileHover='hover'
                  whileTap='tap'
                  transition={{ ease: 'easeInOut', duration: 0.015 }}
                  className={styles.sponsor}
                >
                  <a target='_blank' rel='noopener noreferrer' href='https://www.gcapucr.com/aboutgcap'>
                    <Image
                      src={GCAP}
                      width={750}
                      height={750}
                      layout='responsive'
                      objectFit='contain'
                      quality={100}
                      alt='placeholder'
                    />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
          <div className={styles.groupWrapper}>
            <h3>cutie</h3>
            <div className={styles.group}>
              <div className={styles.standard}>
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  transition={{ ease: 'easeInOut', duration: 0.015 }}
                  className={styles.sponsor}
                >
                  <a target='_blank' rel='noopener noreferrer' href="https://www.wolframalpha.com/">
                    <Image
                      src={Wolfram}
                      width={1973}
                      height={699}
                      layout="responsive"
                      objectFit="contain"
                      quality={80}
                      alt="placeholder"
                    />
                  </a>
                </motion.div>
              </div>
              <div className={styles.standard}>
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  transition={{ ease: 'easeInOut', duration: 0.015 }}
                  className={styles.sponsor}
                >
                  <a target='_blank' rel='noopener noreferrer' href="https://www.fedex.com/">
                    <Image
                      src={FedEx}
                      width={2308}
                      height={1054}
                      layout="responsive"
                      objectFit="contain"
                      quality={80}
                      alt="placeholder"
                    />
                  </a>
                </motion.div>
              </div>
              <div className={styles.standard}>
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  transition={{ ease: 'easeInOut', duration: 0.015 }}
                  className={styles.sponsor}
                >
                  <a target='_blank' rel='noopener noreferrer' href="https://sketch.com/">
                    <Image
                      src={Sketch}
                      width={1919}
                      height={463}
                      layout="responsive"
                      objectFit="contain"
                      quality={80}
                      alt="placeholder"
                    />
                  </a>
                </motion.div>
              </div>
              <div className={styles.standard}>
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  transition={{ ease: 'easeInOut', duration: 0.015 }}
                  className={styles.sponsor}
                >
                  <a target='_blank' rel='noopener noreferrer' href="https://www.triadmagnetics.com/">
                    <Image
                      src={Triad}
                      width={371}
                      height={95}
                      layout="responsive"
                      objectFit="contain"
                      quality={80}
                      alt="placeholder"
                    />
                  </a>
                </motion.div>
              </div>
              <div className={`${styles.standard} ${styles.standardshrink}`}>
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  transition={{ ease: 'easeInOut', duration: 0.015 }}
                  className={styles.sponsor}
                >
                  <a target='_blank' rel='noopener noreferrer' href="https://acmucr.org/">
                    <Image
                      src={ACM}
                      width={910}
                      height={910}
                      layout="responsive"
                      objectFit="contain"
                      quality={80}
                      alt="placeholder"
                    />
                  </a>
                </motion.div>
              </div>
              <div className={`${styles.standard} ${styles.standardshrink}`}>
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  transition={{ ease: 'easeInOut', duration: 0.015 }}
                  className={styles.sponsor}
                >
                  <a target='_blank' rel='noopener noreferrer' href="https://ieee.ee.ucr.edu/">
                    <Image
                      src={IEEE}
                      width={745}
                      height={999}
                      layout="responsive"
                      objectFit="contain"
                      quality={80}
                      alt="placeholder"
                    />
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
