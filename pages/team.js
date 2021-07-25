import React from 'react'
import Head from 'next/head'

import styles from '../styles/Team.module.css'

export default function Team() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Cutie Hack | Team</title>
      </Head>
      <div className={styles.wrapper}>
        <h1>Our Team</h1>
      </div>
    </main>
  )
}
