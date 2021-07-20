import { Provider } from 'next-auth/client'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Socials from '../components/Socials'
import { Toaster } from 'react-hot-toast'

import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Toaster />
      <Nav />
      <Socials />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}
