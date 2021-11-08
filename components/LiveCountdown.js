import React, { useState, useEffect } from 'react'
import Countdown from 'react-countdown'
import { motion } from 'framer-motion'
import Link from 'next/link'

import styles from '../styles/Countdown.module.css'

const Completionist = () => 
  <>
    <div className={styles.header}>
      november 6, 2021
    </div>
    <div className={styles.container}>
      <Link passHref href='/live'>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.995 }}
          transition={{ ease: 'easeInOut', duration: 0.015 }}
          className={styles.button}
        >
          live
        </motion.button>
      </Link>
    </div>
  </>

var buttonVariants = {}

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />
  } 
  else {
    // Render a countdown
    const numDays = days < 10 ? String(`0${days}`) : String(days)
    const numHours = hours < 10 ? String(`0${hours}`) : String(hours)
    const numMinutes = minutes < 10 ? String(`0${minutes}`) : String(minutes)
    const numSeconds = seconds < 10 ? String(`0${seconds}`) : String(seconds)

    return (
      <>
        <div className={styles.header}>
          starting november 6, 2021
        </div>
        <div className={styles.container}>
          <div className={styles.row}>      
            { 
              days > 0 &&
                <>
                  <div className={styles.stack}>
                    <div className={styles.number}>
                      { Array.from(numDays).map(n =>
                        <motion.div variants={buttonVariants} whileHover='hover'>{n}</motion.div>
                      )}
                    </div>
                    <div className={styles.label}>days</div>
                  </div>
                  <div className={styles.separator}>:</div>
                </>
            }
            {
              ( days > 0 || hours > 0 ) &&
                <>
                  <div className={styles.stack}>
                    <div className={styles.number}>
                      { Array.from(numHours).map(n =>
                        <motion.div variants={buttonVariants} whileHover='hover'>{n}</motion.div>
                      )}
                    </div>
                    <div className={styles.label}>hours</div>
                  </div>
                  <div className={styles.separator}>:</div>
                </>
            }
            {
              ( days > 0 || hours > 0 || minutes > 0 ) &&
                <>
                  <div className={styles.stack}>
                    <div className={styles.number}>
                      { Array.from(numMinutes).map(n =>
                        <motion.div variants={buttonVariants} whileHover='hover'>{n}</motion.div>
                      )}
                    </div>
                    <div className={styles.label}>minutes</div>
                  </div>
                  <div className={styles.separator}>:</div>
                </>
            }
            {
              ( days > 0 || hours > 0 || minutes > 0 || seconds > 0 ) &&
                <div className={styles.stack}>
                  <div className={styles.number}>
                    { Array.from(numSeconds).map(n => 
                      <motion.div variants={buttonVariants} whileHover='hover'>{n}</motion.div>
                    )}
                  </div>
                  <div className={styles.label}>seconds</div>
                </div>
            }
          </div>
        </div>
      </>
    )
  }
}

export default function CountdownWrapper( props ) {
  const [isMobile, setIsMobile] = useState(false)
  
  if (!isMobile)
    buttonVariants = {
      hover: { scale: 1.1 }
    }
  else
    buttonVariants = {}

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 720)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })

  return (
    <h2 className={styles.countdown}>
      <Countdown date={props.date} renderer={renderer} />
    </h2>
  )
}
