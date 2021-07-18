import Countdown from 'react-countdown'
import { motion } from 'framer-motion'
import { nanoid } from 'nanoid'

import countdownStyles from '../styles/Countdown.module.css'

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
        <div className={countdownStyles.header}>
          time remaining
        </div>
        <div className={countdownStyles.row}>      
          <div className={countdownStyles.stack}>
            <div className={countdownStyles.number}>
              { days < 10 ? <motion.div whileHover={{scale: 1.1}}>0</motion.div> : null }
              { Array.from(String(days), num => Number(num)).map(n =>
                <motion.div key={nanoid()} whileHover={{scale: 1.1}}>{n}</motion.div>
              )}
            </div>
            <div className={countdownStyles.label}>days</div>
          </div>
          <div className={countdownStyles.separator}>:</div>
          <div className={countdownStyles.stack}>
            <div className={countdownStyles.number}>
              { hours < 10 ? <motion.div whileHover={{scale: 1.1}}>0</motion.div> : null }
              { Array.from(String(hours), num => Number(num)).map(n =>
                <motion.div key={nanoid()} whileHover={{scale: 1.1}}>{n}</motion.div>
              )}
            </div>
            <div className={countdownStyles.label}>hours</div>
          </div>
          <div className={countdownStyles.separator}>:</div>
          <div className={countdownStyles.stack}>
            <div className={countdownStyles.number}>
              { minutes < 10 ? <motion.div whileHover={{scale: 1.1}}>0</motion.div> : null }
              { Array.from(String(minutes), num => Number(num)).map(n =>
                <motion.div key={nanoid()} whileHover={{scale: 1.1}}>{n}</motion.div>
              )}
            </div>
            <div className={countdownStyles.label}>minutes</div>
          </div>
          <div className={countdownStyles.separator}>:</div>
          <div className={countdownStyles.stack}>
            <div className={countdownStyles.number}>
              { seconds < 10 ? <motion.div whileHover={{scale: 1.1}}>0</motion.div> : null }
              { Array.from(String(seconds), num => Number(num)).map(n =>
                <motion.div key={nanoid()} whileHover={{scale: 1.1}}>{n}</motion.div>
              )}
            </div>
            <div className={countdownStyles.label}>seconds</div>
          </div>
        </div>
      </>
    )
  }
}

export default function CountdownWrapper() {
  return (
    <h2 className={countdownStyles.countdown}>
      <Countdown date="2021-10-31T00:00:00" renderer={renderer} />
    </h2>
  )
}
