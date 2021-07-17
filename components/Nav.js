import Link from 'next/link' // We should be using the Link component
import { signIn, signOut, useSession } from 'next-auth/client'
import styles from '../styles/Nav.module.css'
import { motion } from 'framer-motion'

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
          <motion.button
            aria-label="Sign In Button"
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.995 }}
            transition={{ ease: 'easeInOut', duration: 0.015 }}
            className={styles.primarybutton}
            onClick={signIn}
          >
            Sign in
          </motion.button>
        ) : (
          <>
            {true /* replace with variable to check if user already checked in */ ? (
              <Link passHref href="/checkin">
                <motion.a
                  aria-label="Sign In Button"
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.995 }}
                  transition={{ ease: 'easeInOut', duration: 0.015 }}
                  className={styles.primarybutton}
                >
                  Check In
                </motion.a>
              </Link>
            ) : null}
            {false /* replace with variable to check if user already in a group */ ? (
              <Link passHref href="/groups/create">
                <motion.a
                  aria-label="View Group Button"
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.995 }}
                  transition={{ ease: 'easeInOut', duration: 0.015 }}
                  className={styles.primarybutton}
                >
                  View Your Group
                </motion.a>
              </Link>
            ) : (
              <>
                {/* Moved to home page */}
                {/* <Link passHref href="/groups/create">
                  <a className={styles.primarybutton}>Create a Group</a>
                </Link>
                <Link passHref href="/groups/join">
                  <a className={styles.primarybutton}>Join a Group</a>
                </Link> */}
              </>
            )}
            <motion.button
              aria-label="Sign Out Button"
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.995 }}
              transition={{ ease: 'easeInOut', duration: 0.015 }}
              className={styles.secondarybutton}
              onClick={signOut}
            >
              Sign out
            </motion.button>
          </>
        )}
      </div>
    </nav>
  )
}
