import React from 'react'
import { useRouter } from 'next/router'
import toast, { Toaster } from 'react-hot-toast'
import { motion } from 'framer-motion'
import { useSession } from 'next-auth/client'
import formStyles from '../styles/Form.module.css'

export default function CreateGroupForm() {
  const router = useRouter()
  const [session] = useSession()

  const [error, setError] = React.useState(false)
  const [code, setCode] = React.useState('')
  const [groupExists, setGroupExists] = React.useState('')
  const [groupFull, setGroupFull] = React.useState('')
  const [users, setUsers] = React.useState([])

  const handleChangeCode = (e) => {
    setError(false)
    setCode(e.target.value)
  }

  const join = async (code) => {
    await fetchData(code)
    if (groupExists && groupFull) {
      setError(true)
      toast.error('Group is full. Try a different group.')
    } 
    else if (groupExists && !groupFull) {
      setError(false)
      updateData(session.user.name)
      toast.success('Successfully joined group!')
      const dst = '/groups/' + code.toString()
      router.push(dst)
    }
    else if (!groupExists) {
      setError(true)
      toast.error('Group does not exist. Try again.')
    }
  }

  const fetchData = async (code) => {
    const response = await fetch('/api/groups', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ group_data: code }),
    })
    const data = await response.json()
    setGroupExists(Object.keys(data.groups).length !== 0)
    setGroupFull(false) // reset for different groups
    if (data.groups[0] && data.groups[0].users.length === 4) {
      setGroupFull(true)
    }
    if (data.groups[0]) setUsers(data.groups[0].users)
  }

  const updateData = async (name) => {
    users.push(session.user.name)
    const response = await fetch('/api/groups/join', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ group_data: [ name, code, users ] }),
    })
    await response.json()
    setUsers([])
  }

  return (
    <section>
      {error ? (
        <div>
          <Toaster />
        </div>
      ) : null}
      <div className={formStyles.inputWrapper}>
        <div className={formStyles.inputHeader}>Invite Code</div>
        <input
          className={
            formStyles.inputBox && error
              ? `${formStyles.inputBox} ${formStyles.triggeredBox}`
              : `${formStyles.inputBox}`
          }
          value={code}
          onChange={handleChangeCode}
        />
      </div>
      <motion.button
        aria-label="Join Group Button"
        type="button"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.997 }}
        transition={{ ease: 'easeInOut', duration: 0.015 }}
        className={formStyles.button}
        onClick={() => join(code)}
      >
        Join Group
      </motion.button>
    </section>
  )
}
