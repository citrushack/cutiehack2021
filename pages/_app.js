import { Provider } from 'next-auth/client'
import { Toaster } from 'react-hot-toast'

import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Socials from '../components/Socials'
import TopScroll from '../components/TopScroll'

import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Toaster />
      <Nav />
      <Socials />
      <TopScroll />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}
