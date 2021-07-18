import React, { useEffect } from 'react'
import CheckInForm from '../components/CheckInForm'
import Layout from '../components/Layout'
import { useSession } from 'next-auth/client'

import styles from '../styles/Index.module.css'

export default function CheckIn() {
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
    if (session) fetchData(session.user.name)
  })

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

  if (!loading && session)
    return (
      <Layout>
        <p>You already checked in!</p>
      </Layout>
    )

  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.subtitle}>Check In</h1>
        <CheckInForm name={session.user.name} />
      </div>
    </Layout>
  )
}
