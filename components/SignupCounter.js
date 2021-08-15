import useSWR from 'swr'

import { FaRegEdit } from 'react-icons/fa'
import styles from '../styles/SignupCounter.module.css'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function SignupCounter() {
  const { data, error } = useSWR('/api/users', fetcher)

  if (error) {
    return (
      <div className={styles.wrapper}>
        <FaRegEdit className={styles.icon} />
        <div className={styles.text}>there seems to be an error.</div>
      </div>
    )
  }
  if (!data) {
    return (
      <div className={styles.wrapper}>
        <FaRegEdit className={styles.icon} />
        <div className={styles.number}>...</div>
        <div className={styles.text}>hackers signed up so far!</div>
      </div>
    )
  } else
    return (
      <div className={styles.wrapper}>
        <FaRegEdit className={styles.icon} />
        <div className={styles.number}>{Object.keys(data.users).length}</div>
        <div className={styles.text}>hackers signed up so far!</div>
      </div>
    )
}
