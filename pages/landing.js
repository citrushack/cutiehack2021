import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { signIn, useSession } from 'next-auth/client'
import { motion } from 'framer-motion'
import { FaChevronRight } from 'react-icons/fa'

import CountdownWrapper from '../components/LiveCountdown'
import SignupCounter from '../components/SignupCounter'

import logo from '../public/assets/logo.png'
import heroLeft from '../public/assets/hero_left.png'
import heroRight from '../public/assets/hero_right.png'

import styles from '../styles/Index.module.css'

export default function Home() {
  const [session] = useSession()

  const [isMobile, setIsMobile] = useState(false)
  var buttonVariants = {}
  if (!isMobile) {
    buttonVariants = {
      hover: { scale: 1.05 },
      tap: { scale: 0.995 },
    }
  }

  const [checkedIn, setCheckedIn] = useState(false)

  const fetchData = async (userId) => {
    const response = await fetch('/api/checkin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: userId }),
    })
    const data = await response.json()
    setCheckedIn(Object.keys(data.checkins).length !== 0)
  }

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 720)
  }

  useEffect(() => {
    if (session) fetchData(session.user.id)
    window.addEventListener('resize', handleResize)
    setIsMobile(window.innerWidth <= 720)
  }, [session])

  return (
    <div className={styles.bgWrap}>
      <div className={styles.heroLeft}>
        <Image
          src={heroLeft}
          alt="Hero Image"
          objectFit="contain"
          quality={50}
          placeholder="blur"
          priority={true}
        />
      </div>
      <section className={styles.main}>
        <h1>
          <span className={styles.subintrotext}>
            cutie
            <Image
              src={logo}
              height={40}
              width={40}
              objectFit="contain"
              alt="Logo in text"
            />
            hack presents:
          </span>
        </h1>
        <h1 className={styles.title}>better together</h1>
        <p className={styles.description}>a beginner friendly hackathon</p>
        <div>
          {session && (
            <h2 className={styles.greeting}>
              glad to have you, {session.user.name}!
            </h2>
          )}
          <div>
            <CountdownWrapper
              date="2021-11-06T08:00:00"
            />
            <SignupCounter />
            {!session && (
              <div className={styles.actionwrapper}>
                <Link
                  passHref
                  href="/sponsorship-packet.pdf"
                >
                  <motion.button
                    aria-label="Sponsor Button"
                    type="button"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    transition={{ ease: 'easeInOut', duration: 0.015 }}
                    className={`${styles.secondarybutton} ${styles.sponsorbutton}`}
                  >
                    <span>sponsor us</span>
                    <FaChevronRight className={styles.arrow} />
                  </motion.button>
                </Link>
                <motion.button
                  aria-label="Sign In Button"
                  type="button"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  transition={{ ease: 'easeInOut', duration: 0.015 }}
                  className={styles.primarybutton}
                  onClick={signIn}
                >
                  apply
                </motion.button>
              </div>
            )}
            {session && isMobile && !checkedIn && (
              <div className={styles.actionwrapper}>
                <Link passHref href="/checkin">
                  <motion.button
                    aria-label="Check In Button"
                    type="button"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    transition={{ ease: 'easeInOut', duration: 0.015 }}
                    className={styles.primarybutton}
                  >
                    check in
                  </motion.button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
      <div className={styles.heroRight}>
        <Image
          src={heroRight}
          alt="Hero Image"
          objectFit="contain"
          quality={50}
          placeholder="blur"
          priority={true}
        />
      </div>
    </div>
  )
}
