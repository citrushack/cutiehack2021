import React from 'react'
import Layout from '../../../components/Layout'
import { useSession } from 'next-auth/client'
import { Toaster } from 'react-hot-toast'

import styles from '../../../styles/Index.module.css'

export default function GroupPage() {
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
      <div>
        <Toaster />
      </div>
      <div className={styles.container}>
        {/* display group info (group name, invite code, team members) */}
        <div>Group Name</div>
        <div>Invite Code</div>
        <div>Members</div>
      </div>
    </Layout>
  )
}
