import Link from 'next/link' // We should be using the Link component
import { signIn, signOut, useSession } from 'next-auth/client'
import styles from '../styles/Nav.module.css'

export default function Nav() {
  const [session] = useSession()
  return (
    <nav className={styles.navbar}>
      <div className={styles.tabs}>
        <Link href="/">Home</Link>
        <a href="#">About</a>
        <a href="#">FAQ</a>
        <a href="#">Help</a>
        <a href="#">Sponsors</a>
        {!session ? (
          <button className={styles.primarybutton} onClick={signIn}>
            Sign in
          </button>
        ) : (
          <>
            <Link passHref href="/checkin">
              <a className={styles.primarybutton}>Check In</a>
            </Link>
            <button className={styles.secondarybutton} onClick={signOut}>
              Sign out
            </button>
          </>
        )}
      </div>
    </nav>
  )
}
