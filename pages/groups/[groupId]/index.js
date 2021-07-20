import React, { useEffect } from 'react'
import Layout from '../../../components/Layout'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

export default function GroupPage() {
  const router = useRouter()
  const [session, loading] = useSession()
  const [group, setGroup] = React.useState('')
  const [users, setUsers] = React.useState([])

  useEffect(() => {
    if (!loading && !session) {
      router.push('/signin')
      toast.error('Access denied. Please sign in!', { id: 'notSignedInGroupPageError'})
    } else if (session) {
      checkValidGroup()
    }
  }, [loading, session])

  const fetchCode = async (name) => {
    const response = await fetch('/api/checkin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ session_data: name }),
    })
    const data = await response.json()
    return data.checkins[0].groupId
  }

  const fetchGroup = async (code) => {
    const response = await fetch('/api/groups', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ group_data: code }),
    })
    const data = await response.json()
    if (data.groups[0]) {
      setGroup(code)
      setUsers(data.groups[0].users)
    }
  }

  const checkValidGroup = async () => {
    const code = await fetchCode(session.user.name)
    const pageURL = window.location.href;
    const lastURLSegment = pageURL.substr(pageURL.lastIndexOf('/') + 1);
    
    if (code !== lastURLSegment) {
      router.push('/')
      toast.error('Access denied. This group does not exist, or you are not in this group.', { id: 'invalidGroupError'})
    }
    else {
      await fetchGroup(code)
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
      <h1>Invite Code</h1>
      {group}
      <h1>Members</h1>
      {users.map((user) => (
        <div>{user}</div>
      ))}
    </Layout>
  )
}
