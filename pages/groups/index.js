import React, { useEffect } from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

import styles from '../../styles/Index.module.css'
import formStyles from '../../styles/Form.module.css'

export default function CreateGroup() {
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
      <div className={styles.container}>
        <Link passHref href="/groups/create">
          <div className={formStyles.button}>Create a Group</div>
        </Link>
        <Link passHref href="/groups/join">
          <div className={formStyles.button}>Join a Group</div>
        </Link>
        <Link passHref href="/">
          <div className={formStyles.button}>Go Back to Homepage</div>
        </Link>
      </div>
    </Layout>
  )
}
