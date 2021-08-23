import React from 'react'
import Image from 'next/image'

import Lead from '../components/Lead'

import styles from '../styles/Team.module.css'

export default function Team() {
  return (
    <section className={styles.section}>
      <h1>our team</h1>
      <div className={styles.team}>
        <div className={styles.grid}>
          <Lead
            image='/assets/sun.png'
            width='200'
            height='200'
            name='rajbir johar'
            role='director'
            linkedin='https://www.linkedin.com/in/rajbirjohar/'
          />
          <Lead
            image='/assets/sun.png'
            width='200'
            height='200'
            name='audrey kim'
            role='director'
            linkedin='https://www.linkedin.com/in/audrey-kim-696922168/'
          />
          <Lead
            image='/assets/sun.png'
            width='200'
            height='200'
            name='paulian le'
            role='operations lead'
            linkedin='https://www.linkedin.com/in/paulianle7/'
          />
          <Lead
            image='/assets/sun.png'
            width='200'
            height='200'
            name='westin montano'
            role='operations lead'
            linkedin='https://www.linkedin.com/in/westin-montano/'
          />
          <Lead
            image='/assets/sun.png'
            width='200'
            height='200'
            name='mariam golwalla'
            role='sponsorship lead'
            linkedin='/'
          />
          <Lead
            image='/assets/sun.png'
            width='200'
            height='200'
            name='marshall jones'
            role='sponsorship lead'
            linkedin='https://www.linkedin.com/in/marshall-jones-0/'
          />
          <Lead
            image='/assets/sun.png'
            width='200'
            height='200'
            name='henry zheng'
            role='marketing lead'
            linkedin='https://www.linkedin.com/in/henry-zheng00/'
          />
          <Lead
            image='/assets/sun.png'
            width='200'
            height='200'
            name='kimmy lac'
            role='marketing lead'
            linkedin='https://www.linkedin.com/in/kimberlylac/'
          />
          <Lead
            image='/assets/sun.png'
            width='200'
            height='200'
            name='michelle kim'
            role='web dev lead'
            linkedin='https://www.linkedin.com/in/michellesspace/'
          />
          <Lead
            image='/assets/sun.png'
            width='200'
            height='200'
            name='j.s. pescasio'
            role='web dev lead'
            linkedin='https://www.linkedin.com/in/jspescasio/'
          />
        </div>
        {/* <div className={styles.grid}>
          <div className={styles.col}>
            <h4>operations committee</h4>
            <ul>
              <li>john doe</li>
              <li>john doe</li>
              <li>john doe</li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>sponsorship committee</h4>
            <ul>
              <li>john doe</li>
              <li>john doe</li>
              <li>john doe</li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>marketing committee</h4>
            <ul>
              <li>john doe</li>
              <li>john doe</li>
              <li>john doe</li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>web dev committee</h4>
            <ul>
              <li>john doe</li>
              <li>john doe</li>
              <li>john doe</li>
            </ul>
          </div>
        </div> */}
      </div>
    </section>
  )
}
