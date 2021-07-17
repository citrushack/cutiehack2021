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
        <a href="#sponsors">Sponsors</a>
        {!session ? (
          <button className={styles.primarybutton} onClick={signIn}>
            Sign in
          </button>
        ) : (
          <>
            { true /* replace with variable to check if user already checked in */ 
              ?
              <Link passHref href="/checkin">
                <a className={styles.primarybutton}>Check In</a>
              </Link>
              :
              null
            }
            { false /* replace with variable to check if user already in a group */
              ?
              <Link passHref href="/groups/create">
                <a className={styles.primarybutton}>View Your Group</a>
              </Link>
              :
              <>
              {/* Moved to home page */}
                {/* <Link passHref href="/groups/create">
                  <a className={styles.primarybutton}>Create a Group</a>
                </Link>
                <Link passHref href="/groups/join">
                  <a className={styles.primarybutton}>Join a Group</a>
                </Link> */}
              </>
            }
            <button className={styles.secondarybutton} onClick={signOut}>
              Sign out
            </button>
          </>
        )}
      </div>
    </nav>
  )
}
