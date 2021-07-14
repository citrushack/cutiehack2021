import Link from 'next/link' // We should be using the Link component
import { useSession } from 'next-auth/client'
import styles from '../styles/Nav.module.css'

export default function Nav() {
  const [session, loading] = useSession()
  return (
    <nav className={styles.navbar}>
      <div className={styles.tabs}>
        <Link href="/">Home</Link>
        <a href="#">About</a>
        <a href="#">FAQ</a>
        <a href="#">Help</a>
        <a href="#">Sponsors</a>
        {!session ? '' : <Link href="/checkin">Check In</Link>}
      </div>
    </nav>
  )
}
