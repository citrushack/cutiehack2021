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
        <Element name="Home">
          <Landing />
        </Element>
        {/* <Element name="About">
          <About />
        </Element>
        <Element name="FAQ">
          <Faq />
        </Element>
        <Element name="Help">
          <Help />
        </Element>
        <Element name="Sponsors">
          <Sponsors />
        </Element>
        <Team /> */}
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase()

  return { props: {} }
}
