import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'
import CountdownWrapper from '../components/Countdown'
import { connectToDatabase } from '../util/mongodb'
import { useSession } from 'next-auth/client'
import Sponsors from '../pages/sponsors'
import { FaCircle } from 'react-icons/fa'

import hero from '../public/assets/hero.png'

import styles from '../styles/Index.module.css'

export default function Home() {
  const [session] = useSession()
  return (
    <div className={styles.container}>
      <Head>
        <title>Cutie Hack</title>
      </Head>
      <Layout>
        <div className={styles.bgWrap}>
          <Image
            src={hero}
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            quality={100}
            placeholder="blur"
          />
        </div>
        <section className={styles.main}>
          <div className={styles.intro}>
            <div className={styles.window}>
              <div className={styles.windowHeader}>
                <FaCircle className={styles.windowButton} />
                <FaCircle className={styles.windowButton} />
                <FaCircle className={styles.windowButton} />
              </div>
              <div className={styles.windowContent}>
                {session && <h1>Glad to have you, {session.user.name}!</h1>}
                <div>
                  <h1 className={styles.subtitle}>Welcome to</h1>
                  <h1 className={styles.title}>Cutie Hack</h1>
                  <CountdownWrapper />
                  {session && (
                    <div className={styles.actionwrapper}>
                      <Link passHref href="/groups/create">
                        <a className={styles.primarybutton}>Create a Group</a>
                      </Link>
                      <Link passHref href="/groups/join">
                        <a className={styles.primarybutton}>Join a Group</a>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {!session && <>{/* <h1>You are not signed in</h1> */}</>}
        </section>
        {/* <Sponsors /> */}
      </Layout>
    </div>
  )
}

export async function getServerSideProps() {
  const { client } = await connectToDatabase()
  const isConnected = await client.isConnected()

  return { props: { isConnected } }
}
