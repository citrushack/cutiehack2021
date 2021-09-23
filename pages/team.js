import React from 'react'
import Lead from '../components/Lead'

import styles from '../styles/Team.module.css'

export default function Team() {
  const leads = [
    {
      image: '/assets/leads/rj.png',
      width: '1024',
      height: '1024',
      name: 'rajbir johar',
      role: 'director',
      linkedin: 'https://www.linkedin.com/in/rajbirjohar/',
    },
    {
      image: '/assets/leads/audrey.png',
      width: '1024',
      height: '1024',
      name: 'audrey kim',
      role: 'director',
      linkedin: 'https://www.linkedin.com/in/audrey-kim-696922168/',
    },
    {
      image: '/assets/leads/paulian.png',
      width: '1024',
      height: '1024',
      name: 'paulian le',
      role: 'operations lead',
      linkedin: 'https://www.linkedin.com/in/paulianle7/',
    },
    {
      image: '/assets/leads/westin.png',
      width: '1024',
      height: '1024',
      name: 'westin montano',
      role: 'operations lead',
      linkedin: 'https://www.linkedin.com/in/westin-montano/',
    },
    {
      image: '/assets/leads/mariam.png',
      width: '1024',
      height: '1024',
      name: 'mariam golwalla',
      role: 'sponsorship lead',
      linkedin: '/',
    },
    {
      image: '/assets/leads/marshall.png',
      width: '1024',
      height: '1024',
      name: 'marshall jones',
      role: 'sponsorship lead',
      linkedin: 'https://www.linkedin.com/in/marshall-jones-0/',
    },
    {
      image: '/assets/leads/kimmy.png',
      width: '1024',
      height: '1024',
      name: 'kimmy lac',
      role: 'marketing lead',
      linkedin: 'https://www.linkedin.com/in/kimberlylac/',
    },
    {
      image: '/assets/leads/henry.png',
      width: '1024',
      height: '1024',
      name: 'henry zheng',
      role: 'marketing lead',
      linkedin: 'https://www.linkedin.com/in/henry-zheng00/',
    },
    {
      image: '/assets/leads/michelle.png',
      width: '1024',
      height: '1024',
      name: 'michelle kim',
      role: 'web dev lead',
      linkedin: 'https://www.linkedin.com/in/michellesspace/',
    },
    {
      image: '/assets/leads/js.png',
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
