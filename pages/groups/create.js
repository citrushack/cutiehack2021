import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import CreateGroupForm from '../../components/CreateGroupForm'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

export default function CreateGroup() {
  const router = useRouter()
  const [session, loading] = useSession()

  useEffect(() => {
    if (!loading && !session) {
      router.push('/signin')
      toast.error('Access denied. Please sign in!', { id: 'notSignedInCreateGroupError'})
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
    if (data.checkins[0] && data.checkins[0].groupId !== '') {
      router.push('/groups/' + data.checkins[0].groupId)
      toast.error('Already in a group! Leave your group to create a different one.', { id: 'createGroupError'})
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
      <h1>Create a Group</h1>
      <CreateGroupForm />
    </Layout>
  )
}
