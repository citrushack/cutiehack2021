import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'
import CountdownWrapper from '../components/Countdown'
import { connectToDatabase } from '../util/mongodb'
import { useSession } from 'next-auth/client'
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io'
import laptop from '../public/assets/laptop.png'
import plant from '../public/assets/potted_plant.png'

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
          <div className={styles.intro}>
            <div className={styles.intro}>
              {session && <h1>Glad to have you, {session.user.name}!</h1>}
              <h1 className={styles.subtitle}>Welcome to</h1>
              <h1 className={styles.title}>Cutie Hack</h1>
            </div>
          </div>
          <CountdownWrapper />
          {!session && <>{/* <h1>You are not signed in</h1> */}</>}
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

          <div className={styles.contact}>
            <div className={styles.laptop}>
              <Image
                src={laptop}
                alt="laptop asset"
                height="200"
                width="200"
                layout="intrinsic"
              />
            </div>
            <div className={styles.iconWrapper}>
              <a href="https://www.facebook.com/cutiehack/">
                <div className={styles.textIconWrapper}>
                  <IoLogoFacebook className={styles.icon} />
                </div>
              </a>

              <a href="https://www.instagram.com/cutiehack_ucr/">
                <div className={styles.textIconWrapper}>
                  <IoLogoInstagram className={styles.icon} />
                </div>
              </a>
              <a href="https://www.linkedin.com/company/17907222/admin/">
                <div className={styles.textIconWrapper}>
                  <IoLogoLinkedin className={styles.icon} />
                </div>
              </a>
            </div>
            <div className={styles.plant}>
              <Image
                src={plant}
                alt="laptop asset"
                height="200"
                width="200"
                layout="intrinsic"
              />
            </div>
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
