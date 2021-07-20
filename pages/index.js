import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'
import CountdownWrapper from '../components/Countdown'
import { connectToDatabase } from '../util/mongodb'
import { session, useSession } from 'next-auth/client'
import Faq from '../pages/faq'
import Sponsors from '../pages/sponsors'
import { FaCircle } from 'react-icons/fa'
import { motion } from 'framer-motion'

import hero from '../public/assets/hero.png'

import styles from '../styles/Index.module.css'

export default function Home() {
  const [session] = useSession()
  const [checkedIn, setCheckedIn] = React.useState(false)

  const constraintsRef = useRef(null)

  const fetchData = async (name) => {
    const response = await fetch('/api/checkin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ session_data: name }),
    })
    const data = await response.json()
    setCheckedIn(Object.keys(data.checkins).length !== 0)
  }

  useEffect(() => {
    if (session) fetchData(session.user.name)
  })

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
          <motion.div ref={constraintsRef} className={styles.intro}>
            <motion.div
              drag
              dragConstraints={constraintsRef}
              whileDrag={{ scale: 1.05 }}
              dragMomentum={false}
              className={styles.window}
            >
              <div className={styles.windowHeader}>
                <FaCircle className={styles.windowButton} />
                <FaCircle className={styles.windowButton} />
                <FaCircle className={styles.windowButton} />
              </div>
              <div className={styles.windowContent}>
                {session && (
                  <h1 className={styles.greeting}>
                    Glad to have you, {session.user.name}!
                  </h1>
                )}
                <div>
                  <h1 className={styles.title}>cutie hack</h1>
                  <CountdownWrapper />
                  {session && checkedIn && (
                    <div className={styles.actionwrapper}>
                      <Link passHref href="/groups/create">
                        <motion.a
                          aria-label="Create Group Button"
                          type="button"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.995 }}
                          transition={{ ease: 'easeInOut', duration: 0.015 }}
                          className={styles.primarybutton}
                        >
                          Create a Group
                        </motion.a>
                      </Link>
                      <Link passHref href="/groups/join">
                        <motion.a
                          aria-label="Join Group Button"
                          type="button"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.995 }}
                          transition={{ ease: 'easeInOut', duration: 0.015 }}
                          className={styles.primarybutton}
                        >
                          Join a Group
                        </motion.a>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {!session && <>{/* <h1>You are not signed in</h1> */}</>}
        </section>
        {/* <Faq /> */}
        {/* <Sponsors /> */}
      </Layout>
    </div>
  )
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase()

  return { props: {} }
}
