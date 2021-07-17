import React from 'react'
import CheckInForm from '../components/CheckInForm'
import Layout from '../components/Layout'
import { useSession } from 'next-auth/client'

import styles from '../styles/Index.module.css'

export default function CheckIn() {
  const [session, loading] = useSession()

  if (loading)
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    )

  if (!loading && !session)
    return (
      <Layout>
        <p>Access Denied. Please login!</p>
      </Layout>
    )

  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.subtitle}>Check In</h1>
        <CheckInForm name={session.user.name} />
      </div>
    </Layout>
  )
}
