import React from 'react'
import Form from '../components/Form'
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
        <Form name={session.user.name} email={session.user.email} />
      </div>
    </Layout>
  )
}
