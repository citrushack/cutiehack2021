import React, { useEffect } from 'react'
import CheckInForm from '../components/CheckInForm'
import Layout from '../components/Layout'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

import styles from '../styles/Index.module.css'

export default function CheckIn() {
  const router = useRouter()
  const [session, loading] = useSession()
  const [checkedIn, setCheckedIn] = React.useState(false)

  const fetchData = async (name) => {
    const response = await fetch('/api/checkin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ session_data: name }),
    })
    const data = await response.json()
    setCheckedIn(Object.keys(data.checkins).length !== 0)
  }

  useEffect(() => {
    if (!loading && !session) {
      router.push('/signin')
      toast.error('Access denied. Please sign in!')
    } else if (!loading && session && checkedIn) {
      router.push('/signin')
      toast.error('You already checked in!')
    } else if (session) fetchData(session.user.name)
  }, [loading, session])

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
          <CheckInForm name={session.user.name} />
        </>
      )}
    </Layout>
  )
}
