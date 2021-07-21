import React, { useEffect } from 'react'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

import Layout from '../../../components/Layout'

import styles from '../../../styles/Form.module.css'

export default function GroupPage() {
  const router = useRouter()
  const [session, loading] = useSession()

  const [groupId, setGroupId] = React.useState('')
  const [users, setUsers] = React.useState([])

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
      toast.error('Access denied. Please check in!', { id: 'notCheckedInGroupPageError' })
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
      for (let i = 0; i < data.groups[0].users.length; i++) {
        users.push(data.groups[0].users[i].name)
      }
      setUsers(users)
      return data.groups[0].users
    }
  }

  const checkValidGroup = async () => {
    const groupId = await fetchGroupId(session.user.id)
    const pageURL = window.location.href
    const lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1)

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

  const leaveGroup = async (userId) => {
    const currUsers = await fetchGroup(groupId)
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
    router.push('/')
    toast.success('Successfully left the group!', { id: 'leaveGroupSuccess' })
  }

  useEffect(() => {
    if (!loading && !session) {
      router.push('/signin')
      toast.error('Access denied. Please sign in!', {
        id: 'notSignedInGroupPageError',
      })
    } else if (session) {
      fetchData(session.user.id)
      checkValidGroup()
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
      <h1>Invite Code</h1>
      {groupId}
      <h1>Members</h1>
      {users.map((user) => (
        <div>{user}</div>
      ))}
      <div
        onClick={() => leaveGroup(session.user.id)}
        className={styles.button}
      >
        Leave Group
      </div>
    </Layout>
  )
}
