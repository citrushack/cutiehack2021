import React from 'react'

import styles from '../styles/Team.module.css'

newPageTitle = 'Cutie Hack 2021 | Team';
document.title = newPageTitle;
export default function Team() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <h1>Our Team</h1>
      </div>
    </main>
  )
}
