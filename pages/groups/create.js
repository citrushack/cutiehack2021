import React, { useEffect } from 'react'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

import Layout from '../../components/Layout'
import CreateGroupForm from '../../components/CreateGroupForm'

export default function CreateGroup() {
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
      toast.error('Access denied. Please check in!', { id: 'notCheckedInCreateGroupError' })
    }
    if (data.checkins[0] && data.checkins[0].groupId !== '') {
      router.push('/groups/' + data.checkins[0].groupId)
      toast.error(
        'Already in a group! Leave your group to create a different one.',
        { id: 'createGroupError' }
      )
    }
  }

  useEffect(() => {
    if (!loading && !session) {
      router.push('/signin')
      toast.error('Access denied. Please sign in!', {
        id: 'notSignedInCreateGroupError',
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
      <h1>Create a Group</h1>
      <CreateGroupForm />
    </Layout>
  )
}
