import React from 'react'
import Image from 'next/image'
import Lead from '../components/Lead'
import RJ from '../public/assets/leads/rj.png'
import Audrey from '../public/assets/leads/audrey.png'
import Paulian from '../public/assets/leads/paulian.png'
import Westin from '../public/assets/leads/westin.png'
import Mariam from '../public/assets/leads/mariam.png'
import Marshall from '../public/assets/leads/marshall.png'
import Kimmy from '../public/assets/leads/kimmy.png'
import Henry from '../public/assets/leads/henry.png'
import Michelle from '../public/assets/leads/michelle.png'
import JS from '../public/assets/leads/js.png'
import laptop from '../public/assets/laptop.png'
import speechbubble from '../public/assets/speechbubble.png'
import girl from '../public/assets/girl.png'

import styles from '../styles/Team.module.css'

export default function Team() {
  const leads = [
    {
      image: RJ,
      width: '1024',
      height: '1024',
      name: 'rajbir johar',
      role: 'director',
      linkedin: 'https://www.linkedin.com/in/rajbirjohar/',
    },
    {
      image: Audrey,
      width: '1024',
      height: '1024',
      name: 'audrey kim',
      role: 'director',
      linkedin: 'https://www.linkedin.com/in/audrey-kim-696922168/',
    },
    {
      image: Paulian,
      width: '1024',
      height: '1024',
      name: 'paulian le',
      role: 'operations lead',
      linkedin: 'https://www.linkedin.com/in/paulianle7/',
    },
    {
      image: Westin,
      width: '1024',
      height: '1024',
      name: 'westin montano',
      role: 'operations lead',
      linkedin: 'https://www.linkedin.com/in/westin-montano/',
    },
    {
      image: Mariam,
      width: '1024',
      height: '1024',
      name: 'mariam golwalla',
      role: 'sponsorship lead',
      linkedin: '/',
    },
    {
      image: Marshall,
      width: '1024',
      height: '1024',
      name: 'marshall jones',
      role: 'sponsorship lead',
      linkedin: 'https://www.linkedin.com/in/marshall-jones-0/',
    },
    {
      image: Kimmy,
      width: '1024',
      height: '1024',
      name: 'kimmy lac',
      role: 'marketing lead',
      linkedin: 'https://www.linkedin.com/in/kimberlylac/',
    },
    {
      image: Henry,
      width: '1024',
      height: '1024',
      name: 'henry zheng',
      role: 'marketing lead',
      linkedin: 'https://www.linkedin.com/in/henry-zheng00/',
    },
    {
      image: Michelle,
      width: '1024',
      height: '1024',
      name: 'michelle kim',
      role: 'web dev lead',
      linkedin: 'https://www.linkedin.com/in/michellesspace/',
    },
    {
      image: JS,
      width: '1024',
      height: '1024',
      name: 'j.s. pescasio',
      role: 'web dev lead',
      linkedin: 'https://www.linkedin.com/in/jspescasio/',
    },
  ]

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
          {leads.map(({ image, width, height, name, role, linkedin }) => (
            <Lead
              image={image}
              width={width}
              height={height}
              name={name}
              role={role}
              linkedin={linkedin}
            />
          ))}
        </div>
        <div className={styles.committeeWrapper}>
          <div className={styles.committeeImageGroup}>
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
            <div className={styles.laptop}>
              <Image
                alt='Laptop image'
                src={laptop}
                quality={80}
                layout='responsive'
                objectFit='contain'
              />
            </div>
          </div>
          <div className={styles.imageGroup}>
            <div className={styles.speechbubble}>
              <Image
                alt='Speechbubble image'
                src={speechbubble}
                quality={80}
                layout='responsive'
                objectFit='contain'
              />
            </div>
            <div className={styles.girl}>
              <Image
                alt='Girl image'
                src={girl}
                quality={80}
                layout='responsive'
                objectFit='contain'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
