import Layout from '../components/Layout'
import Head from 'next/head'

export default function Custom500() {
  return (
    <Layout>
      <Head>
        <title>Cutie Hack | 404</title>
      </Head>
      <h1>500</h1>
      <h3>
        We are having trouble fetching important data right now. Please check
        back later.
      </h3>
    </Layout>
  )
}
