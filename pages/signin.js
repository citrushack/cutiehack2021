import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { providers, signIn, getSession } from 'next-auth/client'
import { useRouter } from 'next/dist/client/router'
import { motion } from 'framer-motion'

import Layout from '../components/Layout'

import styles from '../styles/Form.module.css'

const SignInError = ({ error }) => {
  const errors = {
    Signin: 'Try signing in with a different account.',
    OAuthSignin: 'Try signing in with a different account.',
    OAuthCallback: 'Try signing in with a different account.',
    OAuthCreateAccount: 'Try signing in with a different account.',
    EmailCreateAccount: 'Try signing in with a different account.',
    Callback: 'Try signing in with a different account.',
    OAuthAccountNotLinked:
      'Please sign in with the same account you used orignally.',
    EmailSignin: 'Check your email address.',
    CredentialsSignin:
      'Sign in failed. Make sure the details you provided are correct.',
    default: 'Unable to sign in.',
  }

  const errorMessage = error && (errors[error] ?? errors.default)

  return <div className="signin-error">{errorMessage}</div>
}

export default function SignIn({ providers }) {
  const {
    query: { callbackUrl, error },
  } = useRouter()

  const [isMobile, setIsMobile] = useState(false)
  var buttonVariants = {}
  if (!isMobile)
    buttonVariants = {
      hover: { scale: 1.02 },
      tap: { scale: 0.997 },
    }

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 720)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  })

  return (
    <Layout>
      <Head>
        <title>Cutie Hack | Sign In</title>
      </Head>
      <div className={styles.container}>
        <section className={styles.section}>
          {error && (
            <div className={styles.errorMsg}>
              <SignInError error={error} />
            </div>
          )}
          {Object.values(providers).map((provider) => {
            return (
              <motion.button
                aria-label="Provider Sign In Button"
                type="button"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                transition={{ ease: 'easeInOut', duration: 0.015 }}
                key={provider.name}
                className={styles.button}
                onClick={() => signIn(provider.id)}
              >
                Sign in with {provider.name}
              </motion.button>
            )
          })}
          <Link passHref href="/">
            <motion.button
              aria-label="Home Button"
              type="button"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              transition={{ ease: 'easeInOut', duration: 0.015 }}
              className={`${styles.button} ${styles.home}`}
            >
              Go Back to Homepage
            </motion.button>
          </Link>
        </section>
      </div>
    </Layout>
  )
}

SignIn.getInitialProps = async (context) => {
  const { req, res } = context
  const session = await getSession({ req })

  if (session && res && session.accessToken) {
    res.writeHead(302, {
      Location: '/',
    })
    res.end()
    return
  }

  return {
    session: undefined,
    providers: await providers(context),
  }
}
