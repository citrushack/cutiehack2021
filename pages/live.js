import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Element } from 'react-scroll'
import { useSession } from 'next-auth/client'
import { FaChevronRight } from 'react-icons/fa'
import CountdownWrapper from '../components/HackerCountdown'
import Schedule from '../pages/schedule'
import Sponsors from '../pages/sponsors'
import Team from '../pages/team'
import Judge from '../components/Judge'

import heroLeft from '../public/assets/hero_left.png'
import heroRight from '../public/assets/hero_right.png'
import resourcesLeft from '../public/assets/resources_left.png'
import resourcesRight from '../public/assets/resources_right.png'
import logo from '../public/assets/logo.png'
import Michael from '../public/assets/judges/michael_odea.jpg'
import Keila from '../public/assets/judges/keila_braden.jpg'
import Elaine from '../public/assets/judges/elaine_lin.jpg'
import Craig from '../public/assets/judges/craig_schroeder.jpg'
import Danial from '../public/assets/judges/danial_beg.jpg'
import Jonathan from '../public/assets/judges/jonathan_trinh.jpg'
import Nate from '../public/assets/judges/nate_melwani.jpg'
import Lucca from '../public/assets/judges/lucca_psaila.jpg'
import KuanChieh from '../public/assets/judges/kuanchieh_hsu.jpg'
import Fuad from '../public/assets/judges/fuad_jamour.jpg'
import Roy from '../public/assets/judges/roy_feng.jpg'
import Kanin from '../public/assets/judges/kanin_liang.jpg'
import Kelly from '../public/assets/judges/kelly_downey.jpg'
import Ian from '../public/assets/judges/ian_oh.jpg'
import Paea from '../public/assets/judges/paea_lependu.jpg'

import styles from '../styles/Live.module.css'

export default function Live() {
  const [session] = useSession()
  const [appStatus, setAppStatus] = useState('')
  const [isMobile, setIsMobile] = useState(false)
  var buttonVariants = {}
  if (!isMobile)
    buttonVariants = {
      hover: { scale: 1.05 },
      tap: { scale: 0.995 },
    }

  const judges = [
    {
      image: Paea,
      name: 'Dr. Paea LePendu',
      role: 'UCR Professor',
    },
    {
      image: Craig,
      name: 'Dr. Craig Schroeder',
      role: 'UCR Professor',
    },
    {
      image: Fuad,
      name: 'Dr. Fuad Jamour',
      role: 'UCR Professor',
    },
    {
      image: Kelly,
      name: 'Kelly Downey',
      role: 'CS Lecturer',
    },
    {
      image: KuanChieh,
      name: 'Kuan-Chieh Hsu',
      role: 'UCR PhD Candidate',
    },
    {
      image: Michael,
      name: 'Michael O\'Dea',
      role: 'IEEE@UCR President',
    },
    {
      image: Ian,
      name: 'Ian Oh',
      role: 'IEEE@UCR Secretary',
    },
    {
      image: Keila,
      name: 'Keila Braden',
      role: 'Design@UCR Director',
    },
    {
      image: Elaine,
      name: 'Elaine Lin',
      role: 'Design@UCR Communications',
    },
    {
      image: Nate,
      name: 'Nate Melwani',
      role: 'Cyber@UCR Vice President',
    },
    {
      image: Lucca,
      name: 'Lucca Psaila',
      role: 'Software Engineer Intern @ Rev',
    },
    {
      image: Danial,
      name: 'Danial Beg',
      role: 'Previous Citrus Hack Director',
    },
    {
      image: Jonathan,
      name: 'Jonathan Trinh',
      role: 'Previous Citrus Hack Director',
    },
    {
      image: Kanin,
      name: 'Kanin Liang',
      role: 'ACM Alumni Chair',
    },
    {
      image: Roy,
      name: 'Roy Feng',
      role: 'ACM President',
    },
  ]

  const fetchData = async (id) => {
    const response = await fetch('/api/checkin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: id }),
    })
    const data = await response.json()
    if (data.checkins[0]) {
      setAppStatus(data.checkins[0].qualified)
    }
  }

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 720)
  }

  useEffect(() => {
    if (session) fetchData(session.user.id)
    window.addEventListener('resize', handleResize)
  }, [session])

  return (
    <>
      <Head>
        <title>Cutie Hack | Live</title>
      </Head>
      <Element name="Countdown" className={styles.element}>
        <section className={styles.countdown}>
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
          <div>
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
            <CountdownWrapper
              date="2021-11-06T20:00:00"
            />
          </div>
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
        </section>
      </Element>
      <Element name="Schedule" className={styles.element}>
        <Schedule />
      </Element>
      <Element name="Judges" className={styles.element}>
        <section className={styles.judges}>
          <div className={styles.wrapper}>
            <div className={styles.wave}>
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
            <div className={styles.grid}>
              {judges.map(({ image, name, role }) =>
                <Judge
                  image={image}
                  width={150}
                  height={150}
                  name={name}
                  role={role}
                />
              )}
            </div>
          </div>
        </section>
      </Element>
      <Element name="Resources" className={styles.element}>
        <section className={styles.resources}>
          <div className={styles.wave}>
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
          <div className={styles.resourcesWrapper}>
            <div className={styles.resourcesBg}>
              <div className={styles.resourcesLeft}>
                <Image
                  alt='Section background'
                  src={resourcesLeft}
                  width={968}
                  height={1552}
                  quality={80}
                  layout='responsive'
                  objectFit='contain'
                />
              </div>
              <div className={styles.resourcesRight}>
                <Image
                  alt='Section background'
                  src={resourcesRight}
                  width={904}
                  height={1493}
                  quality={80}
                  layout='responsive'
                  objectFit='contain'
                />
              </div>
            </div>
            <div className={styles.resourcesContent}>
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
                <Link passHref href="https://github.com/citrushack/CitrusHackResources">
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
                { (session && appStatus === 'yes') &&
                  <Link passHref href="https://discord.gg/CjkwAvFr2T">
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
                }
              </div>
            </div>
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
