import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'

import styles from '../styles/SponsorUs.module.css'

export default function SponsorUs() {
  return (
    <Layout>
      <Head>
        <title>Cutie Hack | Sponsor Us</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.section}>
          <h1>Sponsor Us</h1>
          <p>Contact us at <Link passHref href='mailto:citrushack@gmail.com'><span className={styles.link}>citrushack@gmail.com</span></Link> if you&#39;re interested in sponsoring Cutie Hack 2021!</p>
          <iframe src="sponsorship-packet.pdf#toolbar=0" width="100%" height="100%" />
          <Link passHref href="/">
            <motion.button
              aria-label="Home Button"
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.995 }}
              transition={{ ease: 'easeInOut', duration: 0.015 }}
              className={`${styles.button} ${styles.home}`}
            >
              Go Back to Homepage
            </motion.button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
