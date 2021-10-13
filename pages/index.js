import Head from 'next/head'
import React from 'react'
import { connectToDatabase } from '../util/mongodb'
import { Element } from 'react-scroll'
import Layout from '../components/Layout'
import Landing from '../pages/landing'
import About from '../pages/about'
import Faq from '../pages/faq'
import Help from '../pages/help'
import Sponsors from '../pages/sponsors'
import Team from '../pages/team'

import styles from '../styles/Index.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cutie Hack</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Layout>
        <Element name="Home" className={styles.element}>
          <Landing />
        </Element>
        <Element name="About" className={styles.element}>
          <About />
        </Element>
        <Element name="Support" className={styles.element}>
          <Help />
        </Element>
        <Element name="Sponsors" className={styles.element}>
          <Sponsors />
        </Element>
        <Element name="Team" className={styles.element}>
          <Team />
        </Element>
        <Element name="FAQ" className={styles.element}>
          <Faq />
        </Element>
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  await connectToDatabase()
  return { props: {} }
}
