import React from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import { nanoid } from 'nanoid'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

import styles from '../styles/Form.module.css'

export default function CreateGroupForm() {
  const router = useRouter()
  const [session] = useSession()

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

  return (
    <section>
      <motion.button
        aria-label="Create Group Button"
        type="button"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.997 }}
        transition={{ ease: 'easeInOut', duration: 0.015 }}
        className={styles.button}
        onClick={() => createGroup(session.user.id, session.user.name)}
      >
        Create Group
      </motion.button>
    </section>
  )
}
