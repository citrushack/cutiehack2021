import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import JoinGroupForm from '../../components/JoinGroupForm'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

export default function CreateGroup() {
  const router = useRouter()
  const [session, loading] = useSession()

  useEffect(() => {
    if (!loading && !session) {
      router.push('/signin')
      toast.error('Access denied. Please sign in!')
    }
  }, [loading, session])

  if (loading)
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    )

  return (
    <Layout>
      <h1>Join a Group</h1>
      <JoinGroupForm />
    </Layout>
  )
}
