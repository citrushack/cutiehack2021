import React, { useEffect } from 'react'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

import formStyles from '../../styles/Form.module.css'

export default function Group() {
  const router = useRouter()
  const [session, loading] = useSession()
  const [inGroup, setInGroup] = React.useState(false)
  const [group, setGroup] = React.useState('')

  useEffect(() => {
    if (!loading && !session) {
      router.push('/signin')
      toast.error('Access denied. Please sign in!', { id: 'notSignedInGroupError'})
    }
    else if (session) {
      fetchData(session.user.name)
    }
  }, [loading, session])

  const fetchData = async (name) => {
    const response = await fetch('/api/checkin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ session_data: name }),
    })
    const data = await response.json()
    setInGroup(data.checkins[0].groupId !== '')
    if (data.checkins[0].groupId !== '') {
      setGroup(data.checkins[0].groupId)
    }
  }

  if (loading)
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    )

  return (
    <Layout>
      { inGroup ?
        <Link passHref href={'/groups/' + group}>
          <div className={formStyles.button}>View Your Group</div>
        </Link>
        : 
        <>
          <Link passHref href="/groups/create">
            <div className={formStyles.button}>Create a Group</div>
          </Link>
          <Link passHref href="/groups/join">
            <div className={formStyles.button}>Join a Group</div>
          </Link>
        </>
      }
      <Link passHref href="/">
        <div className={formStyles.button}>Go Back to Homepage</div>
      </Link>
    </Layout>
  )
}
