import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { nanoid } from 'nanoid'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

import Layout from '../../components/Layout'

import styles from '../../styles/Form.module.css'

export default function Groups() {
  const router = useRouter()
  const [session, loading] = useSession()

  const [isMobile, setIsMobile] = useState(false)
  var buttonVariants = {}
  if (!isMobile)
    buttonVariants = {
      hover: { scale: 1.02 },
      tap: { scale: 0.997 },
    }

  const [inGroup, setInGroup] = useState(false)
  const [groupId, setGroupId] = useState('')

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
      toast.error('Access denied. Please check in!', {
        id: 'notCheckedInGroupPageError',
      })
    }
    if (data.checkins[0]) {
      setInGroup(data.checkins[0].groupId !== '')
      if (data.checkins[0].groupId !== '') {
        setGroupId(data.checkins[0].groupId)
      }
    }
  }

  const createGroup = async (userId, userName) => {
    const groupId = nanoid()
    const response = await fetch('/api/groups/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ group: [groupId, userId, userName] }),
    })
    await response.json()
    toast.success('Successfully created a group!', { id: 'createGroupSuccess' })
    const dst = '/groups/' + groupId.toString()
    router.push(dst)
  }

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 720)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
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
        <Head>
          <title>Cutie Hack | Groups</title>
        </Head>
        <p>Loading...</p>
      </Layout>
    )

  return (
    <Layout>
      <Head>
        <title>Cutie Hack | Groups</title>
      </Head>
      {inGroup ? (
        <Link passHref href={'/groups/' + groupId}>
          <motion.button
            aria-label="View Group Button"
            type="button"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            transition={{ ease: 'easeInOut', duration: 0.015 }}
            className={styles.button}
          >
            View Your Group
          </motion.button>
        </Link>
      ) : (
        <>
          <motion.button
            aria-label="Create Group Button"
            type="button"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            transition={{ ease: 'easeInOut', duration: 0.015 }}
            className={styles.button}
            onClick={() => createGroup(session.user.id, session.user.name)}
          >
            Create Group
          </motion.button>
          <Link passHref href="/groups/join">
            <motion.button
              aria-label="Join Group Button"
              type="button"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              transition={{ ease: 'easeInOut', duration: 0.015 }}
              className={styles.button}
            >
              Join a Group
            </motion.button>
          </Link>
        </>
      )}
      <Link passHref href="/">
        <motion.button
          aria-label="Home Button"
          type="button"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          transition={{ ease: 'easeInOut', duration: 0.015 }}
          className={`${styles.button} ${styles.home}`}
        >
          Go Back to Homepage
        </motion.button>
      </Link>
    </Layout>
  )
}
