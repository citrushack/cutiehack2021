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
      {session && (
        <div className={styles.mainContent}>
          <h1>Check In</h1>
          <CheckInForm />
        </div>
      )}
      <div className={styles.wave}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={styles.shapefill}
          ></path>
        </svg>
      </div>
    </section>
  )
}
