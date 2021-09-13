import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import Layout from '../../../components/Layout'
import Modal from '../../../components/Modal'

import { MdContentCopy } from 'react-icons/md'
import { FaRegCircle } from 'react-icons/fa'

import styles from '../../../styles/Group.module.css'
import formStyles from '../../../styles/Form.module.css'

export default function GroupPage() {
  const router = useRouter()
  const [session, loading] = useSession()

  const [isMobile, setIsMobile] = useState(false)
  var buttonVariants = {}
  if (!isMobile)
    buttonVariants = {
      hover: { scale: 1.02 },
      tap: { scale: 0.997 },
    }

  const [leaveModalOpen, setLeaveModalOpen] = useState(false)
  const toggleLeaveModal = () => {
    setLeaveModalOpen(!leaveModalOpen)
  }

  const [groupId, setGroupId] = useState('')
  const [users, setUsers] = useState([])
  const [appStatus, setAppStatus] = useState('')
  const [groupMatch, setgroupMatch] = useState(false)

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
      setAppStatus(data.checkins[0].qualified)
      if (data.checkins[0].qualified !== 'yes') {
        router.push('/')
        toast.error(
          'Access denied. Application has not been approved yet or has been denied.',
          {
            id: 'notQualifiedYetError',
          }
        )
      } else {
        checkValidGroup()
      }
    }
  }

  const fetchLastURLSegment = async () => {
    const pageURL = window.location.href
    const lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1)
    return lastURLSegment
  }

  const checkValidGroup = async () => {
    const groupId = await fetchGroupId(session.user.id)
    const lastURLSegment = await fetchLastURLSegment()
    setgroupMatch(groupId === lastURLSegment)

    if (groupId !== lastURLSegment) {
      router.push('/')
      toast.error(
        'Access denied. This group does not exist, or you are not in this group.',
        { id: 'invalidGroupError' }
      )
    } else {
      await fetchGroup(groupId)
    }
  }

  const fetchGroupId = async (userId) => {
    const response = await fetch('/api/checkin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: userId }),
    })
    const data = await response.json()
    if (data.checkins[0]) return data.checkins[0].groupId
  }

  const fetchGroup = async (groupId) => {
    const response = await fetch('/api/groups', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ group: groupId }),
    })
    const data = await response.json()
    if (data.groups[0]) {
      setGroupId(groupId)
      const users = []
      if (data.groups[0].users) {
        for (let i = 0; i < data.groups[0].users.length; i++) {
          users.push(data.groups[0].users[i])
        }
        setUsers(users)
      }
      return users
    }
  }

  const deleteGroup = async (groupId, userId) => {
    const response = await fetch('/api/groups/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ group: [groupId, userId] }),
    })
    await response.json()
  }

  const leaveGroup = async (userId) => {
    const currUsers = await fetchGroup(groupId)
    if (currUsers.length === 1) {
      await deleteGroup(groupId, userId)
    } else {
      const newUsers = []
      for (let i = 0; i < currUsers.length; i++) {
        if (currUsers[i].id !== userId) {
          newUsers.push(currUsers[i])
        }
      }
      const response = await fetch('/api/groups/leave', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ group: [groupId, userId, newUsers] }),
      })
      await response.json()
    }
    router.push('/')
    toast.success('Successfully left the group!', { id: 'leaveGroupSuccess' })
  }

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 720)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    if (!loading && !session) {
      router.push('/signin')
      toast.error('Access denied. Please sign in!', {
        id: 'notSignedInGroupPageError',
      })
    } else if (session) {
      fetchData(session.user.id)
    }
  }, [loading, session, router])

  if (loading || appStatus !== 'yes' || !groupMatch)
    return (
      <Layout>
        <Head>
          <title>Cutie Hack | Your Group</title>
        </Head>
        <p>Loading...</p>
      </Layout>
    )

  return (
    <Layout>
      <Head>
        <title>Cutie Hack | Your Group</title>
      </Head>
      <div className={formStyles.container}>
        <div className={formStyles.section}>
          <h1>Invite Code</h1>
          <CopyToClipboard text={groupId} className={styles.copywrapper}>
            <motion.button
              aria-label="Copy to Clipboard Button"
              type="button"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              transition={{ ease: 'easeInOut', duration: 0.015 }}
              className={styles.copywrapper}
              onClick={() => toast.success('Copied to clipboard!')}
            >
              <div className={styles.filler}>
                <MdContentCopy />
              </div>
              <div>{groupId}</div>
              <MdContentCopy className={styles.copybutton} />
            </motion.button>
          </CopyToClipboard>
          <h1>Members</h1>
          <div className={styles.userlist}>
            {users.map((user) => (
              <div className={styles.user}>
                <FaRegCircle className={styles.bullet} />
                <div>{user.name}</div>
                <FaRegCircle className={styles.filler} />
              </div>
            ))}
          </div>
          <div className={formStyles.groupbuttonWrapper}>
            <motion.button
              aria-label="Leave Group Button"
              type="button"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              transition={{ ease: 'easeInOut', duration: 0.015 }}
              className={formStyles.button}
              onClick={() => toggleLeaveModal()}
            >
              Leave Group
            </motion.button>
          </div>
          <Link passHref href="/">
            <motion.button
              aria-label="Home Button"
              type="button"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              transition={{ ease: 'easeInOut', duration: 0.015 }}
              className={`${formStyles.button} ${formStyles.home}`}
            >
              Go Back to Homepage
            </motion.button>
          </Link>
          <Modal
            show={leaveModalOpen}
            handler={toggleLeaveModal}
            header="Leave Group?"
            caption="If you leave, you will need to be reinvited by the remaining members. If no one else is left in the group, the group will be deleted."
          >
            <div className={styles.buttonWrapper}>
              <motion.button
                aria-label="Confirm Leave Button"
                type="button"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                transition={{ ease: 'easeInOut', duration: 0.015 }}
                className={`${formStyles.button} ${formStyles.danger}`}
                onClick={() => leaveGroup(session.user.id)}
              >
                Confirm
              </motion.button>
              <motion.button
                aria-label="Cancel Leave Button"
                type="button"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                transition={{ ease: 'easeInOut', duration: 0.015 }}
                className={`${formStyles.button} ${formStyles.cancel}`}
                onClick={() => toggleLeaveModal()}
              >
                Cancel
              </motion.button>
            </div>
          </Modal>
        </div>
      </div>
    </Layout>
  )
}
