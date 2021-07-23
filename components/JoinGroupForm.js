import React, { useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

import styles from '../styles/Form.module.css'

export default function CreateGroupForm() {
  const router = useRouter()
  const [session] = useSession()

  const [isMobile, setIsMobile] = useState(false)
  var buttonVariants = {}
  if (!isMobile)
    buttonVariants = {
      hover: { scale: 1.02 },
      tap: { scale: 0.997 }
    }

  const [error, setError] = useState(false)
  const [groupId, setGroupId] = useState('')

  const handleChangeCode = (e) => {
    setError(false)
    setGroupId(e.target.value)
  }

  const joinGroup = async (groupId) => {
    const group = await fetchGroup(groupId)
    if (group.exists && group.full) {
      setError(true)
      toast.error('Group is full. Try a different group.', { id: 'fullGroupError'})
    } 
    else if (group.exists && !group.full) {
      setError(false)
      updateGroup(session.user.id, session.user.name, group.users)
      toast.success('Successfully joined group!', { id: 'joinGroupSuccess'})
      const dst = '/groups/' + groupId.toString()
      router.push(dst)
    }
    else if (!group.exists) {
      setError(true)
      toast.error('Group does not exist. Try again.', { id: 'groupError'})
    }
  }

  const fetchGroup = async (groupId) => {
    const response = await fetch('/api/groups', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ group: groupId }),
    })
    const data = await response.json()
    var groupExists = (Object.keys(data.groups).length !== 0)
    var groupFull = false
    var users = []
    if (data.groups[0]) {
      groupFull = (data.groups[0].users.length === 4)
      users = data.groups[0].users
    }
    return ({exists: groupExists, full: groupFull, users: users})
  }

  const updateGroup = async (userId, userName, users) => {
    users.push({ id: userId, name: userName })
    const response = await fetch('/api/groups/join', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ group: [ groupId, userId, users ] }),
    })
    await response.json()
  }

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 720)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })

  return (
    <section>
      <div className={styles.inputWrapper}>
        <div className={styles.inputHeader}>Invite Code</div>
        <input
          className={
            styles.inputBox && error
              ? `${styles.inputBox} ${styles.triggeredBox}`
              : `${styles.inputBox}`
          }
          value={groupId}
          onChange={handleChangeCode}
        />
      </div>
      <motion.button
        aria-label="Join Group Button"
        type="button"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        transition={{ ease: 'easeInOut', duration: 0.015 }}
        className={styles.button}
        onClick={() => joinGroup(groupId)}
      >
        Join Group
      </motion.button>
    </section>
  )
}
