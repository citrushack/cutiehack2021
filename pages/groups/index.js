import React, { useEffect } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

import Layout from '../../components/Layout'

import styles from '../../styles/Form.module.css'

export default function Groups() {
  const router = useRouter()
  const [session, loading] = useSession()

  const [inGroup, setInGroup] = React.useState(false)
  const [groupId, setGroupId] = React.useState('')

  const fetchData = async (userId) => {
    const response = await fetch('/api/checkin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: userId }),
    })
    const data = await response.json()
    if (Object.keys(data.checkins).length === 0) {
      router.push('/checkin')
      toast.error('Access denied. Please check in!', { id: 'notCheckedInGroupPageError' })
    }
    if (data.checkins[0]) {
      setInGroup(data.checkins[0].groupId !== '')
      if (data.checkins[0].groupId !== '') {
        setGroupId(data.checkins[0].groupId)
      }
    }
  }

  useEffect(() => {
    if (!loading && !session) {
      router.push('/signin')
      toast.error('Access denied. Please sign in!', {
        id: 'notSignedInGroupError',
      })
    } else if (session) {
      fetchData(session.user.id)
    }
  }, [loading, session, router])

  if (loading)
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    )

  return (
    <Layout>
      {inGroup ? (
        <Link passHref href={'/groups/' + groupId}>
          <div className={styles.button}>View Your Group</div>
        </Link>
      ) : (
        <>
          <Link passHref href="/groups/create">
            <div className={styles.button}>Create a Group</div>
          </Link>
          <Link passHref href="/groups/join">
            <div className={styles.button}>Join a Group</div>
          </Link>
        </>
      )}
      <Link passHref href="/">
        <div className={styles.button}>Go Back to Homepage</div>
      </Link>
    </Layout>
  )
}
