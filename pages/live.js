import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Element } from 'react-scroll'
import { FaChevronRight } from 'react-icons/fa'
import CountdownWrapper from '../components/Countdown'
import Sponsors from '../pages/sponsors'
import Team from '../pages/team'
import Judge from '../components/Judge'

import heroLeft from '../public/assets/hero_left.png'
import heroRight from '../public/assets/hero_right.png'
import logo from '../public/assets/logo.png'
import Michael from '../public/assets/judges/michael_odea.jpg'
import Keila from '../public/assets/judges/keila_braden.jpg'
import Craig from '../public/assets/judges/craig_schroeder.jpg'
import Danial from '../public/assets/judges/danial_beg.jpg'
import Jonathan from '../public/assets/judges/jonathan_trinh.jpg'
import Mariam from '../public/assets/judges/mariam_salloum.jpg'
import Lucca from '../public/assets/judges/lucca_psaila.jpg'
import KuanChieh from '../public/assets/judges/kuanchieh_hsu.jpg'
import Fuad from '../public/assets/judges/fuad_jamour.jpg'
import Roy from '../public/assets/judges/roy_feng.jpg'
import Kanin from '../public/assets/judges/kanin_liang.jpg'
import Kelly from '../public/assets/judges/kelly_downey.jpg'
import Ian from '../public/assets/judges/ian_oh.jpg'

import styles from '../styles/Live.module.css'

export default function Live() {
  const [isMobile, setIsMobile] = useState(false)
  var buttonVariants = {}
  if (!isMobile)
    buttonVariants = {
      hover: { scale: 1.05 },
      tap: { scale: 0.995 },
    }

  const judges = [
    {
      image: Michael,
      name: 'Michael O\'Dea',
      role: 'IEEE@UCR President',
    },
    {
      image: Keila,
      name: 'Keila Braden',
      role: 'Design@UCR Director',
    },
    {
      image: logo,
      name: 'Elaine Lin',
      role: 'Design@UCR Communications',
    },
    {
      image: Craig,
      name: 'Craig Schroeder',
      role: 'UCR Professor',
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
      image: Mariam,
      name: 'Dr. Mariam Salloum',
      role: 'UCR Professor',
    },
    {
      image: Lucca,
      name: 'Lucca Psaila',
      role: 'Software Engineer Intern @ Rev',
    },
    {
      image: KuanChieh,
      name: 'Kuan-Chieh Hsu',
      role: 'UCR PhD Candidate',
    },
    {
      image: Fuad,
      name: 'Fuad Jamour',
      role: 'UCR Professor',
    },
    {
      image: Roy,
      name: 'Roy Feng',
      role: 'ACM President',
    },
    {
      image: Kanin,
      name: 'Kanin Liang',
      role: 'ACM Alumni Chair',
    },
    {
      image: Kelly,
      name: 'Kelly Downey',
      role: 'CS Lecturer',
    },
    {
      image: Ian,
      name: 'Ian Oh',
      role: 'IEEE@UCR Secretary',
    },
  ]

  const setupEvents = [
    {
      time: '07:00am',
      name: 'Opening Ceremony (Zoom)',
    },
    {
      time: '08:00am',
      name: 'Hacking Starts',
    },
    {
      time: '09:00am',
      name: 'Registration Ends',
    },
    {
      time: '06:30pm',
      name: 'Judges Show Up',
    },
    {
      time: '07:00pm',
      name: 'Judges Debriefing (Zoom)',
    },
    {
      time: '08:00pm',
      name: 'Judging + Demos',
    },
    {
      time: '08:00pm',
      name: 'Hacking Ends',
    },
    {
      time: '10:00pm',
      name: 'Judging Deliberations',
    },
    {
      time: '11:00pm',
      name: 'Closing Ceremony (Zoom)',
    },
  ]

  const workshops = [
    {
      time: '08:00am',
      name: 'Team Building',
    },
    {
      time: '09:00am',
      name: 'Intro to Git/Github',
    },
    {
      time: '10:00am',
      name: 'Intro to Python',
    },
    {
      time: '11:00am',
      name: 'Intro to Discord Bots',
    },
    {
      time: '12:00pm',
      name: 'Intro to Android Studio',
    },
    {
      time: '01:00pm',
      name: 'Intro to Unity',
    },
    {
      time: '01:00pm',
      name: 'Intro to Web Development',
    },
    {
      time: '03:00pm',
      name: 'Intro to UI/UX Design',
    },
    {
      time: '04:00pm',
      name: 'Intro to Docker',
    },
    {
      time: '04:00pm',
      name: 'Intro to LinkedIn',
    },
    {
      time: '05:00pm',
      name: 'Overview of CS Fields',
    },
    {
      time: '06:00pm',
      name: 'Pitching Projects',
    },
  ]

  const activities = [
    {
      time: '09:00am',
      name: 'Cutest Cutie Begins + Open Raffle',
    },
    {
      time: '10:00am',
      name: 'Club Panel',
    },
    {
      time: '12:30pm',
      name: 'TypeRacer Tournament',
    },
    {
      time: '02:00pm',
      name: 'Pick Raffle Winner + Meet the Leads',
    },
    {
      time: '02:30pm',
      name: 'League of Legends + Valorant',
    },
    {
      time: '03:30pm',
      name: 'Codenames',
    },
    {
      time: '06:30pm',
      name: 'Jackbox Party Games',
    },
    {
      time: '08:00pm',
      name: 'Cutest Cutie Ends',
    },
  ]

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
              date="2021-11-06T21:00:00"
              heading="time left until hacking ends"
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
        <section className={styles.schedule}>
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
            <h1>schedule of events</h1>
            <div className={styles.schedules}>
              <div>
                <div className={styles.eventGroupTitle}>
                  <h2>setup</h2>
                  <p className={styles.hidden}>via</p>
                </div>
                {setupEvents.map(({ time, name }) =>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className={styles.event}
                  >
                    <div className={styles.eventTime}>
                      {time}
                    </div>
                    <div className={styles.eventName}>
                      {name}
                    </div>
                  </motion.div>
                )}
              </div>
              <div>
                <div className={styles.eventGroupTitle}>
                  <h2>workshops</h2>
                  <p>via zoom</p>
                </div>
                {workshops.map(({ time, name }) =>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className={styles.event}
                  >
                    <div className={styles.eventTime}>
                      {time}
                    </div>
                    <div className={styles.eventName}>
                      {name}
                    </div>
                  </motion.div>
                )}
              </div>
              <div>
                <div className={styles.eventGroupTitle}>
                  <h2>activities</h2>
                  <p>via discord</p>
                </div>
                {activities.map(({ time, name }) =>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className={styles.event}
                  >
                    <div className={styles.eventTime}>
                      {time}
                    </div>
                    <div className={styles.eventName}>
                      {name}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>
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
