import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/client'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'

import { HiUser, HiX, HiUsers, HiLogout } from 'react-icons/hi'
import { FaRegQuestionCircle } from 'react-icons/fa'

import styles from '../styles/ProfileDropdown.module.css'

export default function ProfileDropdown(props) {
  const [session] = useSession()
  const router = useRouter()

  const [isMobile, setIsMobile] = useState(false)
  var buttonVariants = {}
  if (!isMobile)
    buttonVariants = {
      hover: { scale: 1.05 },
      tap: { scale: 0.995 },
    }

  const [openProfile, setOpenProfile] = useState(false)

  const triggerWarning = () => {
    toast(
      <div className={styles.toast}>
        <div>
          This determines your eligibility to participate in Cutie Hack.
        </div>
        <div>
          Application status will be updated within 24 hours. Check back again later if your application status is still pending!
        </div>
      </div>,
      {
        id: 'appStatusInfo',
        duration: 6000,
      }
    )
  }

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 720)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    const handleRouteChange = () => {
      setOpenProfile(false)
    }
    router.events.on('routeChangeStart', handleRouteChange)
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [setOpenProfile])

  return (
    <div className={!props.visible && styles.hide}>
      <div className={openProfile && props.visible ? `${styles.open} ${styles.profiledropdown}` : `${styles.profiledropdown}`}>
        <motion.button
          aria-label="View Group Button"
          type="button"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          transition={{ ease: 'easeInOut', duration: 0.015 }}
          className={styles.profilebutton}
          onClick={() => setOpenProfile(!openProfile)}
        >
          {openProfile ? <HiX /> : <HiUser />}
        </motion.button>
        <div className={styles.profile}>
          
        {session && props.checkedIn && (
            <div className={styles.profileheader}>
              <div className={styles.statuslabel}>
                application status
                <FaRegQuestionCircle
                  onClick={() => triggerWarning()}
                  className={styles.trigger}
                />
              </div>
              <div className={styles.status}>
                {
                    props.appStatus === '' && 
                    <div className={styles.pending}>
                      pending...
                    </div>
                  ||
                    props.appStatus === 'yes' &&  
                    <div className={styles.accepted}>
                      accepted
                    </div>
                  ||
                    props.appStatus === 'no' && 
                    <div className={styles.denied}>
                      denied
                    </div>
                }
              </div>
            </div>
          )}
          {props.appStatus === 'yes' &&
            <div className={styles.profilebody}>
              <Link passHref href={props.inGroup ? '/groups/' + props.groupId : '/groups/'}>
                <motion.button
                  aria-label="Groups Button"
                  type="button"
                  className={styles.primaryoption}
                  onClick={() => setOpenProfile(false)}
                >
                  <div className={styles.icon}><HiUsers /></div>
                  <div>
                    {props.inGroup ? 'my group' : 'groups'}
                  </div>
                </motion.button>
              </Link>
            </div>
          }
          <div className={styles.profilefooter}>
            <motion.button
              aria-label="Sign Out Button"
              type="button"
              className={styles.secondaryoption}
              onClick={signOut}
            >
              <div className={styles.icon}><HiLogout /></div>
              <div>Sign Out</div>
            </motion.button>
          </div>
        </div>
      </div>
      <div className={styles.overlay} onClick={() => setOpenProfile(false)}/>
    </div>
  )
}
