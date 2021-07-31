import React from 'react'
import Image from 'next/image'

import plane from '../public/assets/plane.png'
import clouds from '../public/assets/clouds.png'
// import { FaCircle } from 'react-icons/fa'

import styles from '../styles/About.module.css'

export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <div>
          <Image
            src={plane}
            objectFit="contain"
            width={100}
            height={80}
            quality={100}
            placeholder="blur"
          />
        </div>
        <div className={styles.window}>
          <div className={styles.windowHeader}>
            {/* <div>
              <FaCircle className={styles.windowButton} />
              <FaCircle className={styles.windowButton} />
              <FaCircle className={styles.windowButton} />
            </div> */}
            <div className={styles.title}>about</div>
            {/* <div className={styles.filler}>
              <FaCircle className={styles.windowButton} />
              <FaCircle className={styles.windowButton} />
              <FaCircle className={styles.windowButton} />
            </div> */}
          </div>
          <div className={styles.description}>
            Cutie Hack is a 12-hour, beginner-oriented hackathon hackathon
            hosted at University of California, Riverside with an expected
            participation of 500 hackers.
          </div>
        </div>
        <div>
          <Image
            src={clouds}
            objectFit="contain"
            width={300}
            height={200}
            quality={100}
            placeholder="blur"
          />
        </div>
      </div>
    </main>
  )
}
