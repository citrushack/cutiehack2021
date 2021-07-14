import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import CountdownWrapper from '../components/Countdown'
import { connectToDatabase } from '../util/mongodb'
import { signIn, signOut, useSession } from 'next-auth/client'
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io'

import styles from '../styles/Index.module.css'

export default function Home() {
  const [session] = useSession()
  return (
    <div className={styles.container}>
      <Head>
        <title>Cutie Hack</title>
      </Head>
      <Layout>
        <section className={styles.main}>
          <h1 className={styles.subtitle}>Welcome to</h1>
          <h1 className={styles.title}>Cutie Hack</h1>
          <CountdownWrapper />
          {/* {!session && (
            <>
              <h1>You are not signed in</h1>
            </>
          )}
          {session && (
            <>
              <h1>Signed in as {session.user.name} </h1>
            </>
          )} */}
          <div className={styles.grid}>
            <a
              href="https://www.facebook.com/cutiehack/"
              className={styles.card}
            >
              <div className={styles.textIconWrapper}>
                <div>Facebook</div>
                <IoLogoFacebook className={styles.icon} />
              </div>
            </a>

            <a
              href="https://www.instagram.com/cutiehack_ucr/"
              className={styles.card}
            >
              <div className={styles.textIconWrapper}>
                <div>Instagram</div>
                <IoLogoInstagram className={styles.icon} />
              </div>
            </a>
          </div>
        </section>
      </Layout>
    </div>
  )
}

export async function getServerSideProps() {
  const { client } = await connectToDatabase()
  const isConnected = await client.isConnected()

  return { props: { isConnected } }
}
