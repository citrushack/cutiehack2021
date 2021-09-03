import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { signIn, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { nanoid } from 'nanoid'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

import CountdownWrapper from '../components/Countdown'
import SignupCounter from '../components/SignupCounter'

import logo from '../public/assets/logo.png'
import heroLeft from '../public/assets/hero_left.png'
import heroRight from '../public/assets/hero_right.png'

import styles from '../styles/Index.module.css'

export default function Home() {
  const router = useRouter()
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
  const [inGroup, setInGroup] = useState(false)
  const [groupId, setGroupId] = useState('')

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
    if (data.checkins[0]) {
      setInGroup(data.checkins[0].groupId !== '')
      if (data.checkins[0].groupId !== '') {
        setGroupId(data.checkins[0].groupId)
      }
    }
  }

  const createGroup = async (userId, userName) => {
    const groupId = nanoid()
    const response = await fetch('/api/groups/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ group: [groupId, userId, userName] }),
    })
    await response.json()
    toast.success('Successfully created a group!', { id: 'createGroupSuccess' })
    const dst = '/groups/' + groupId.toString()
    router.push(dst)
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
    <>
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
                Glad to have you, {session.user.name}!
              </h2>
            )}
            <div>
              <CountdownWrapper 
                date='2021-11-06T09:00:00'
                heading='starting november 6, 2021'
              />
              <SignupCounter />
              {!session && (
                <div className={styles.actionwrapper}>
                  <motion.button
                    aria-label="Sponsor Button"
                    type="button"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    transition={{ ease: 'easeInOut', duration: 0.015 }}
                    className={styles.secondarybutton}
                    // onClick={signIn} change this to sponsor packet
                  >
                    sponsor
                  </motion.button>
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
                      Check In
                    </motion.button>
                  </Link>
                </div>
              )}
              {session && isMobile && inGroup && (
                <div className={styles.actionwrapper}>
                  <Link passHref href={'/groups/' + groupId}>
                    <motion.button
                      aria-label="View Group Button"
                      type="button"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      transition={{ ease: 'easeInOut', duration: 0.015 }}
                      className={styles.primarybutton}
                    >
                      View Your Group
                    </motion.button>
                  </Link>
                </div>
              )}
              {session && checkedIn && !inGroup && (
                <div className={styles.actionwrapper}>
                  <motion.button
                    aria-label="Create Group Button"
                    type="button"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    transition={{ ease: 'easeInOut', duration: 0.015 }}
                    className={styles.primarybutton}
                    onClick={() =>
                      createGroup(session.user.id, session.user.name)
                    }
                  >
                    Create Group
                  </motion.button>
                  <Link passHref href="/groups/join">
                    <motion.button
                      aria-label="Join Group Button"
                      type="button"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      transition={{ ease: 'easeInOut', duration: 0.015 }}
                      className={styles.primarybutton}
                    >
                      Join a Group
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
    </>
  )
}
