import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/client'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

import { HiUser, HiX, HiUsers, HiLogout } from 'react-icons/hi'
import { FaRegQuestionCircle } from 'react-icons/fa'

import styles from '../styles/ProfileDropdown.module.css'

export default function ProfileDropdown() {
  const [session] = useSession()

  const [isMobile, setIsMobile] = useState(false)
  var buttonVariants = {}
  if (!isMobile)
    buttonVariants = {
      hover: { scale: 1.05 },
      tap: { scale: 0.995 },
    }

  const [checkedIn, setCheckedIn] = useState(false)
  const [inGroup, setInGroup] = useState(false)
  const [groupId, setGroupId] = useState('')
  const [appStatus, setAppStatus] = useState('')
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

  const fetchData = async (userId) => {
    const response = await fetch('/api/checkin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: userId }),
    })
    const data = await response.json()
    setCheckedIn(Object.keys(data.checkins).length !== 0)
    if (data.checkins[0]) {
      setAppStatus(data.checkins[0].qualified)
      setInGroup(data.checkins[0].groupId !== '')
      if (data.checkins[0].groupId !== '') {
        setGroupId(data.checkins[0].groupId)
      }
    }
  }

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 720)
  }

  useEffect(() => {
    if (session) fetchData(session.user.id)
    window.addEventListener('resize', handleResize)
  }, [session])

  return (
    <div className={openProfile ? `${styles.open} ${styles.profiledropdown}` : `${styles.profiledropdown}`}>
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
        
      {session && checkedIn && (
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
                appStatus === '' && 
                  <div className={styles.pending}>
                    pending...
                  </div>
                ||
                  appStatus === 'yes' &&  
                  <div className={styles.accepted}>
                    accepted
                  </div>
                ||
                  appStatus === 'no' && 
                  <div className={styles.denied}>
                    denied
                  </div>
              }
            </div>
          </div>
        )}
        {appStatus === 'yes' &&
          <div className={styles.profilebody}>
            <Link passHref href={inGroup ? '/groups/' + groupId : '/groups/'}>
              <motion.button
                aria-label="Groups Button"
                type="button"
                className={styles.primaryoption}
              >
                <div className={styles.icon}><HiUsers /></div>
                <div>
                  {inGroup ? 'my group' : 'groups'}
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
  )
}
