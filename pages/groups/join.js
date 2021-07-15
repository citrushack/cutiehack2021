import React from 'react'
import Layout from '../../components/Layout'
import JoinGroupForm from '../../components/JoinGroupForm'
import { useSession } from 'next-auth/client'

import styles from '../../styles/Index.module.css'

export default function CreateGroup() {
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
        <JoinGroupForm />
      </div>
    </Layout>
  )
}
