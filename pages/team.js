import React from 'react'
import Image from 'next/image'

import Lead from '../components/Lead'

import styles from '../styles/Team.module.css'

export default function Team() {
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

      <div className={styles.team}>
        <h1>our team</h1>
        <div className={styles.grid}>
          <Lead
            image="/assets/sun.png"
            width="200"
            height="200"
            name="rajbir johar"
            role="director"
            linkedin="https://www.linkedin.com/in/rajbirjohar/"
          />
          <Lead
            image="/assets/sun.png"
            width="200"
            height="200"
            name="audrey kim"
            role="director"
            linkedin="https://www.linkedin.com/in/audrey-kim-696922168/"
          />
          <Lead
            image="/assets/sun.png"
            width="200"
            height="200"
            name="paulian le"
            role="operations lead"
            linkedin="https://www.linkedin.com/in/paulianle7/"
          />
          <Lead
            image="/assets/sun.png"
            width="200"
            height="200"
            name="westin montano"
            role="operations lead"
            linkedin="https://www.linkedin.com/in/westin-montano/"
          />
          <Lead
            image="/assets/sun.png"
            width="200"
            height="200"
            name="mariam golwalla"
            role="sponsorship lead"
            linkedin="/"
          />
          <Lead
            image="/assets/sun.png"
            width="200"
            height="200"
            name="marshall jones"
            role="sponsorship lead"
            linkedin="https://www.linkedin.com/in/marshall-jones-0/"
          />
          <Lead
            image="/assets/sun.png"
            width="200"
            height="200"
            name="henry zheng"
            role="marketing lead"
            linkedin="https://www.linkedin.com/in/henry-zheng00/"
          />
          <Lead
            image="/assets/sun.png"
            width="200"
            height="200"
            name="kimmy lac"
            role="marketing lead"
            linkedin="https://www.linkedin.com/in/kimberlylac/"
          />
          <Lead
            image="/assets/sun.png"
            width="200"
            height="200"
            name="michelle kim"
            role="web dev lead"
            linkedin="https://www.linkedin.com/in/michellesspace/"
          />
          <Lead
            image="/assets/sun.png"
            width="200"
            height="200"
            name="j.s. pescasio"
            role="web dev lead"
            linkedin="https://www.linkedin.com/in/jspescasio/"
          />
        </div>
        <div className={styles.committee}>
          <h3>committee members</h3>
          <div>Danial Beg</div>
          <div>Jonathon Chon</div>
          <div>Andrei Dimaano</div>
          <div>Minsoo Kim</div>
          <div>Aaron Van</div>
          <div>James Zhang</div>
          <div>Sophie Zhu</div>
          <div>Caleb Yoo</div>
          <div>Easwaran</div>
        </div>
      </div>
    </section>
  )
}
