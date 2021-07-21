import React, { useEffect } from 'react'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

import Layout from '../components/Layout'
import CheckInForm from '../components/CheckInForm'

export default function CheckIn() {
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
    if (Object.keys(data.checkins).length !== 0) {
      router.push('/')
      toast.error('You already checked in!', { id: 'checkInTwiceError' })
    }
  }

  useEffect(() => {
    if (!loading && !session) {
      router.push('/signin')
      toast.error('Access denied. Please sign in!', {
        id: 'notSignedInCheckInError',
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
      {session && (
        <>
          <h1>Check In</h1>
          <CheckInForm />
        </>
      )}
    </Layout>
  )
}
