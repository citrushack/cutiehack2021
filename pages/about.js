import React from 'react'
import Image from 'next/image'

import plane from '../public/assets/plane.png'
import { FaCircle } from 'react-icons/fa'

import styles from '../styles/About.module.css'

export default function About() {
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
      <div className={styles.mainContent}>
        {/* <div>
          <Image
            src={plane}
            objectFit='contain'
            width={100}
            height={80}
            quality={50}
            placeholder='blur'
            alt='Image of plane'
          />
        </div> */}
        <h1 className={styles.title}>about us</h1>
        <div className={styles.window}>
          <div className={styles.windowHeader}>
            <div>
              <FaCircle className={styles.windowButton} />
              <FaCircle className={styles.windowButton} />
              <FaCircle className={styles.windowButton} />
            </div>
            <div className={styles.filler}>
              <FaCircle className={styles.windowButton} />
              <FaCircle className={styles.windowButton} />
              <FaCircle className={styles.windowButton} />
            </div>
          </div>
          <div className={styles.windowContent}>
            <div>
              <h3 className={styles.content}>
                Cutie Hack is a virtual{' '}
                <b>12-hour, beginner-oriented hackathon</b> hosted by students
                at the University of California, Riverside. Hackers are
                challenged with creating a cool project within the timeframe to
                demo in order to win awesome prizes. Cutie Hack will also be
                hosting{' '}
                <b>
                  informative workshops, fun games, and industry networking.
                </b>
              </h3>
              <h3 className={styles.content}>
                While this hackathon is created around beginners,{' '}
                <b>we welcome anyone</b> from any high school or college no
                matter your experience level. Come on out and see what you can
                make!
              </h3>
            </div>
            <div className={styles.statsWrapper}>
              <div className={styles.stats}>
                <h1>500+</h1>
                <h2>Hackers</h2>
              </div>
              <div className={styles.stats}>
                <h1>12</h1>
                <h2>Hours</h2>
              </div>
              <div className={styles.stats}>
                <h1>$4000</h1>
                <h2>In Prizes</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
