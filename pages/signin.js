import React from 'react'

import styles from '../styles/Common.module.css'
import signinStyles from '../styles/SignIn.module.css'

import { providers, signIn, getSession } from "next-auth/client"

export default function SignIn({ providers }) {
  return (
    <div className={styles.container}>
      {Object.values(providers).map((provider) => {
        if (provider.name === "Email") {
            return;
        }
      return (
        <div key={provider.name}>
          <button 
            onClick={() => signIn(provider.id)}
            className={signinStyles.button}
          >
            Sign in with {provider.name}
          </button>
        </div>
      );
      })}
    </div>
  );
}

SignIn.getInitialProps = async (context) => {
  const { req, res } = context;
  const session = await getSession({ req });

  if (session && res && session.accessToken) {
    res.writeHead(302, {
      Location: "/",
    });
    res.end();
    return;
  }

  return {
    session: undefined,
    providers: await providers(context),
  };
};