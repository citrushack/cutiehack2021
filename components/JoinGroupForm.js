import React from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

import styles from '../styles/Form.module.css'

export default function CreateGroupForm() {
  const router = useRouter()
  const [session] = useSession()

  const [error, setError] = React.useState(false)
  const [groupExists, setGroupExists] = React.useState('')
  const [groupFull, setGroupFull] = React.useState('')
  const [groupId, setGroupId] = React.useState('')
  const [users, setUsers] = React.useState([])

  const handleChangeCode = (e) => {
    setError(false)
    setGroupId(e.target.value)
  }

  const joinGroup = async (groupId) => {
    await fetchGroup(groupId)
    if (groupExists && groupFull) {
      setError(true)
      toast.error('Group is full. Try a different group.', { id: 'fullGroupError'})
    } 
    else if (groupExists && !groupFull) {
      setError(false)
      updateGroup(session.user.id, session.user.name)
      toast.success('Successfully joined group!', { id: 'joinGroupSuccess'})
      const dst = '/groups/' + groupId.toString()
      router.push(dst)
    }
    else if (!groupExists) {
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
    setGroupExists(Object.keys(data.groups).length !== 0)
    setGroupFull(false) // reset for different groups
    if (data.groups[0] && data.groups[0].users.length === 4) {
      setGroupFull(true)
    }
    if (data.groups[0]) setUsers(data.groups[0].users)
  }

  const updateGroup = async (userId, userName) => {
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
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.997 }}
        transition={{ ease: 'easeInOut', duration: 0.015 }}
        className={styles.button}
        onClick={() => joinGroup(groupId)}
      >
        Join Group
      </motion.button>
    </section>
  )
}
