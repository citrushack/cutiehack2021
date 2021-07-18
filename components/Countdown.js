import Countdown from 'react-countdown'
import { motion } from 'framer-motion'
import { nanoid } from 'nanoid'

import styles from '../styles/Countdown.module.css'

const Completionist = () => <span>You are good to go!</span>

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />
  } 
  else {
    // Render a countdown
    return (
      <>
        <div className={styles.header}>
          time remaining
        </div>
        <div className={styles.row}>      
          <div className={styles.stack}>
            <div className={styles.number}>
              { Array.from(days < 10 ? '0' + String(days) : String(days), num => Number(num)).map(n =>
                <motion.div key={nanoid()} whileHover={{scale: 1.1}}>{n}</motion.div>
              )}
            </div>
            <div className={styles.label}>days</div>
          </div>
          <div className={styles.separator}>:</div>
          <div className={styles.stack}>
            <div className={styles.number}>
              { Array.from(hours < 10 ? '0' + String(hours) : String(hours), num => Number(num)).map(n =>
                <motion.div key={nanoid()} whileHover={{scale: 1.1}}>{n}</motion.div>
              )}
            </div>
            <div className={styles.label}>hours</div>
          </div>
          <div className={styles.separator}>:</div>
          <div className={styles.stack}>
            <div className={styles.number}>
              { Array.from(minutes < 10 ? '0' + String(minutes) : String(minutes), num => Number(num)).map(n =>
                <motion.div key={nanoid()} whileHover={{scale: 1.1}}>{n}</motion.div>
              )}
            </div>
            <div className={styles.label}>minutes</div>
          </div>
          <div className={styles.separator}>:</div>
          <div className={styles.stack}>
            <div className={styles.number}>
              { Array.from(seconds < 10 ? '0' + String(seconds) : String(seconds), num => Number(num)).map(n =>
                <motion.div key={nanoid()} whileHover={{scale: 1.1}}>{n}</motion.div>
              )}
            </div>
            <div className={styles.label}>seconds</div>
          </div>
        </div>
      </>
    )
  }
}

export default function CountdownWrapper() {
  return (
    <h2 className={styles.countdown}>
      <Countdown date="2021-10-31T00:00:00" renderer={renderer} />
    </h2>
  )
}
