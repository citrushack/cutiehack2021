import React from 'react'
import CountdownWrapper from '../components/Countdown'

import styles from '../styles/Live.module.css'

export default function Live() {
  return (
    <section className={styles.section}>
      <CountdownWrapper
        date="2021-11-06T21:00:00"
        heading="time left until end"
      />
    </section>
  )
}
