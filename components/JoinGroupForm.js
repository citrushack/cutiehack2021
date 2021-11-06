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
    const userGroupId = await fetchGroupId(session.user.id)
    if (userGroupId !== '') {
      router.push('/groups/' + userGroupId)
      toast.error(
        'Already in a group! Leave your group to join a different one.',
        { id: 'tryJoinGroupError' }
      )
    }
    else if (group.exists && group.full) {
      setError(true)
      toast.error('Group is full. Try a different group.', { id: 'fullGroupError'})
    } 
    else if (group.exists && !group.full) {
      var groupMembers = ''
      if (group.users.length === 1) {
        groupMembers = group.users[0].name.toString()
      }
      else if (group.users.length === 2) {
        groupMembers = group.users[0].name.toString() + ' and ' + group.users[1].name.toString()
      }
      else if (group.users.length === 3) {
        groupMembers = group.users[0].name.toString() + ', ' + group.users[1].name.toString() + ', and ' + group.users[2].name.toString()
      }

      const userEmail = await fetchUserEmail(session.user.id)
      sendEmailForUser(userEmail, groupMembers)

      const groupEmails = await fetchGroupEmails(group)
      for (let i = 0; i < groupEmails.length; i++) {
        sendEmailForGroup(groupEmails[i], session.user.name)
      }

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

  const fetchGroupId = async (userId) => {
    const response = await fetch('/api/checkin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: userId }),
    })
    const data = await response.json()
    if (data.checkins[0]) return data.checkins[0].groupId
  }

  const fetchUserEmail = async (userId) => {
    const response = await fetch('/api/checkin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: userId }),
    })
    const data = await response.json()
    if (data.checkins[0]) return data.checkins[0].email
  }

  const fetchGroupEmails = async (group) => {
    var groupEmails = []
    for (let i = 0; i < group.users.length; i++) {
      const response = await fetch('/api/checkin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: group.users[i].id }),
      })
      const data = await response.json()
      if (data.checkins[0]) groupEmails.push(data.checkins[0].email)
    }
    return groupEmails
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
      if (data.groups[0].users) groupFull = (data.groups[0].users.length === 4)
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

  const sendEmailForUser = async (email, groupMembers) => {
    fetch('/api/sendEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        email: email,
        template_id: 'd-06a1b789e26343379dc0d93974a69d97',
        name: session.user.name,
        members: groupMembers,
        invite_code: groupId.toString(),
        newcomer: ''
      })
    });
  }

  const sendEmailForGroup = async (email, newcomer) => {
    fetch('/api/sendEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        email: email,
        template_id: 'd-2d5a7dbaae4740509e1a982076fee102',
        name: session.user.name,
        members: '',
        invite_code: '',
        newcomer: newcomer
      })
    });
  }

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 720)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })

  return (
    <>
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
        aria-label='Join Group Button'
        type='button'
        variants={buttonVariants}
        whileHover='hover'
        whileTap='tap'
        transition={{ ease: 'easeInOut', duration: 0.015 }}
        className={styles.button}
        onClick={() => joinGroup(groupId)}
      >
        Join Group
      </motion.button>
    </>
  )
}
