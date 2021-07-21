import React, { useEffect } from 'react'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

import Layout from '../../components/Layout'
import JoinGroupForm from '../../components/JoinGroupForm'

export default function JoinGroup() {
  const router = useRouter()
  const [session, loading] = useSession()

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
      toast.error('Access denied. Please check in!', { id: 'notCheckedInJoinGroupError' })
    }
    if (data.checkins[0] && data.checkins[0].groupId !== '') {
      router.push('/groups/' + data.checkins[0].groupId)
      toast.error(
        'Already in a group! Leave your group to join a different one.',
        { id: 'joinGroupError' }
      )
    }
  }

  useEffect(() => {
    if (!loading && !session) {
      router.push('/signin')
      toast.error('Access denied. Please sign in!', {
        id: 'notSignedInJoinGroupError',
      })
    } else if (session) {
      fetchData(session.user.id)
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
      <h1>Join a Group</h1>
      <JoinGroupForm />
    </Layout>
  )
}
