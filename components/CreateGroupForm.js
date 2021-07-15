import React from 'react'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import { nanoid } from 'nanoid'

import styles from '../styles/Index.module.css'
import formStyles from '../styles/Form.module.css'

export default function CreateGroupForm() {
  const router = useRouter()

  const [name, setName] = React.useState()

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const createGroup = () => {
    const code = nanoid()
    toast.success('Successfully created a group!')
    const dst = '/groups/' + code.toString()
    router.push(dst)
  }

  return (
    <section>
      <div className={formStyles.inputWrapper}>
        <div className={formStyles.inputHeader}>Group Name</div>
        <input
          className={formStyles.inputBox}
          value={name}
          onChange={handleChangeName}
        />
      </div>
      <div
        className={formStyles.button}
        onClick={() => createGroup()}
      >
        Create Group
      </div>
    </section>
  )
}