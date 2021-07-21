import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import { nanoid } from 'nanoid'
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

  const createGroup = async (userId, userName) => {
    const groupId = nanoid()
    const response = await fetch('/api/groups/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ group: [ groupId, userId, userName ] }),
    })
    await response.json()
    toast.success('Successfully created a group!', { id: 'createGroupSuccess'})
    const dst = '/groups/' + groupId.toString()
    router.push(dst)
  }

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 720)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })

  return (
    <section>
      <motion.button
        aria-label="Create Group Button"
        type="button"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        transition={{ ease: 'easeInOut', duration: 0.015 }}
        className={styles.button}
        onClick={() => createGroup(session.user.id, session.user.name)}
      >
        Create Group
      </motion.button>
    </section>
  )
}
