import React from 'react'
import Head from 'next/head'

import styles from '../styles/About.module.css'

export default function About() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Cutie Hack | About</title>
      </Head>
      <div className={styles.wrapper}>
        <h1 className={styles.header}>About</h1>
      </div>
    </main>
  )
}
