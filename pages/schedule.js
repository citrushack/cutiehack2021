import React from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/Live.module.css'

export default function Live() {
  const setupEvents = [
    {
      time: '07:00am',
      name: 'Opening Ceremony (Prerecorded on Youtube)',
    },
    {
      time: '08:00am',
      name: 'Hacking Starts',
    },
    {
      time: '06:00pm',
      name: 'Project Submission Opens',
    },
    {
      time: '06:30pm',
      name: 'Judges Show Up',
    },
    {
      time: '07:30pm',
      name: 'Judges Debriefing (Zoom)',
    },
    {
      time: '08:00pm',
      name: 'Hacking Ends',
    },
    {
      time: '08:15pm',
      name: 'Judging + Demos',
    },
    {
      time: '10:00pm',
      name: 'Judging Deliberations',
    },
    {
      time: '11:00pm',
      name: 'Closing Ceremony (Live on YouTube)',
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
      name: 'Valorant',
    },
    {
      time: '03:30pm',
      name: 'Gartic Phone',
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

  return (
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
  )
}
