import { Provider } from 'next-auth/client'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      {/* <Nav /> */}
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}
