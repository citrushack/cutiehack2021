import Countdown from 'react-countdown'
import styles from '../styles/Countdown.module.css'
const Completionist = () => <span>You are good to go!</span>

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />
  } else {
    // Render a countdown
    return (
      <span>
        {days} days, {hours} hours, {minutes}, minutes, {seconds} seconds left!
      </span>
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
