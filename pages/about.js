import React from 'react'

import styles from '../styles/About.module.css'

newPageTitle = 'Cutie Hack 2021 | About';
document.title = newPageTitle;
export default function About() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <h1 className={styles.header}>About</h1>
      </div>
    </main>
  )
}
