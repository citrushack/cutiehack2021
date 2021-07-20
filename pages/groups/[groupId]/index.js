import React, { useEffect } from 'react'
import Layout from '../../../components/Layout'
import { useSession } from 'next-auth/client'
import { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

import styles from '../../../styles/Index.module.css'

export default function GroupPage() {
  const router = useRouter()
  const [session, loading] = useSession()

  useEffect(() => {
    if (!loading && !session) {
      router.push('/signin')
      toast.error('Access denied. Please sign in!')
    }
  }, [loading, session])

  if (loading)
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    )

  return (
    <Layout>
      <div>
        <Toaster />
      </div>
      <div className={styles.container}>
        {/* display group info (invite code, team members) */}
        <div>Group Name</div>
        <div>Invite Code</div>
        <div>Members</div>
      </div>
    </Layout>
  )
}
