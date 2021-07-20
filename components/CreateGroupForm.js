import React from 'react'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import { nanoid } from 'nanoid'
import { motion } from 'framer-motion'
import { useSession } from 'next-auth/client'
import formStyles from '../styles/Form.module.css'

export default function CreateGroupForm() {
  const router = useRouter()
  const [session] = useSession()

  // const [name, setName] = React.useState()

  // const handleChangeName = (e) => {
  //   setName(e.target.value)
  // }

  const createGroup = async (name) => {
    const code = nanoid()
    const response = await fetch('/api/groups/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ group_data: [ code, name ] }),
    })
    await response.json()
    toast.success('Successfully created a group!', { id: 'createGroupSuccess'})
    const dst = '/groups/' + code.toString()
    router.push(dst)
  }

  return (
    <section>
      {/* <div className={formStyles.inputWrapper}>
        <div className={formStyles.inputHeader}>Group Name</div>
        <input
          className={formStyles.inputBox}
          value={name}
          onChange={handleChangeName}
        />
      </div> */}
      <motion.button
        aria-label="Create Group Button"
        type="button"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.997 }}
        transition={{ ease: 'easeInOut', duration: 0.015 }}
        className={formStyles.button}
        onClick={() => createGroup(session.user.name)}
      >
        Create Group
      </motion.button>
    </section>
  )
}
