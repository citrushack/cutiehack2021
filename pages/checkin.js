import React from 'react'
import Form from '../components/Form'
import { useSession } from 'next-auth/client'

import styles from '../styles/Common.module.css'

export default function CheckIn() {
  const [session] = useSession()

  return (
    <div className={styles.container}>
      <Form name={session.user.name} email={session.user.email} />
    </div>
  )
}
