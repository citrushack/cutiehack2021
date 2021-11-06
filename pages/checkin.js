import React, { useEffect } from 'react'
import Head from 'next/head'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

import Layout from '../components/Layout'
import CheckInForm from '../components/CheckInForm'

import styles from '../styles/Form.module.css'

export default function CheckIn() {
  const router = useRouter()
  const [session, loading] = useSession()

  useEffect(() => {
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
    if (!loading && !session) {
      router.push('/signin')
      toast.error('Access denied. Please sign in!', {
        id: 'notSignedInCheckInError',
      })
    } else if (session) {
      fetchData(session.user.id)
      router.push('/')
      toast.error('Applications have closed!', {
        id: 'appsClosedError',
      })
    }
  }, [loading, session, router])

  if (loading)
    return (
      <Layout>
        <Head>
          <title>Cutie Hack | Check In</title>
        </Head>
        <p>Loading...</p>
      </Layout>
    )

  return (
    <section className={styles.section}>
      <Head>
        <title>Cutie Hack | Check In</title>
      </Head>
      {/* {session && (
        <div className={styles.mainContent}>
          <h1>Check In</h1>
          <CheckInForm />
        </div>
      )} */}
      <p>Applications are closed...</p>
    </section>
  )
}
