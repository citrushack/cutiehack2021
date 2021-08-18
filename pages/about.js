import React from 'react'
import Image from 'next/image'

import plane from '../public/assets/plane.png'
import clouds from '../public/assets/clouds.png'
// import { FaCircle } from 'react-icons/fa'

import styles from '../styles/About.module.css'

export default function About() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div>
          <Image
            src={plane}
            objectFit="contain"
            width={100}
            height={80}
            quality={50}
            placeholder="blur"
            alt="Image of plane"
          />
        </div>
        <div className={styles.window}>
          <div className={styles.windowHeader}>
            {/* <div>
              <FaCircle className={styles.windowButton} />
              <FaCircle className={styles.windowButton} />
              <FaCircle className={styles.windowButton} />
            </div> */}
            <h1>about us</h1>
            {/* <div className={styles.filler}>
              <FaCircle className={styles.windowButton} />
              <FaCircle className={styles.windowButton} />
              <FaCircle className={styles.windowButton} />
            </div> */}
          </div>
          <h3 className={styles.content}>
            Cutie Hack is a virtual <b>12-hour, beginner-oriented hackathon</b>{' '}
            hosted by students at the University of California, Riverside.
            Hackers are challenged with creating a cool project within the
            timeframe to demo in order to win awesome prizes. Cutie Hack will
            also be hosting{' '}
            <b>informative workshops, fun games, and industry networking.</b>
          </h3>
          <h3 className={styles.content}>
            While this hackathon is created around beginners,{' '}
            <b>we welcome anyone</b> from any high school or college no matter
            your experience level. Come on out and see what you can make!
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
    </section>
  )
}
