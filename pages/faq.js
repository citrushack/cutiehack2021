import React from 'react'

import Accordion from '../components/Accordion'

import styles from '../styles/Accordion.module.css'

export default function Faq() {
  return (
    <main className={styles.main}>
      <div className={styles.faq}>
        <div className={styles.header}>questions?</div>
        <p className={styles.description}>
          Here are the most commonly asked questions. Feel free to ask us any
          question you don&apos;t see on here.
        </p>
        <Accordion />
      </div>
    </main>
  )
}
