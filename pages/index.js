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
