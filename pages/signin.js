import React from "react";

import styles from "../styles/Common.module.css";
import signinStyles from "../styles/SignIn.module.css";

import { providers, signIn, getSession } from "next-auth/client";
import { useRouter } from "next/dist/client/router";

const SignInError = ({ error }) => {
  const errors = {
    Signin: "Try signing in with a different account.",
    OAuthSignin: "Try signing in with a different account.",
    OAuthCallback: "Try signing in with a different account.",
    OAuthCreateAccount: "Try signing in with a different account.",
    EmailCreateAccount: "Try signing in with a different account.",
    Callback: "Try signing in with a different account.",
    OAuthAccountNotLinked:
      "Please sign in with the same account you used orignally.",
    EmailSignin: "Check your email address.",
    CredentialsSignin:
      "Sign in failed. Make sure the details you provided are correct.",
    default: "Unable to sign in.",
  };

  const errorMessage = error && (errors[error] ?? errors.default);

  return <div className="signin-error">{errorMessage}</div>;
};

export default function SignIn({ providers }) {
  const {
    query: { callbackUrl, error },
  } = useRouter();

  return (
    <div className={styles.container}>
      {error && (
        <div className={signinStyles.errorMsg}>
          <SignInError error={error} />
        </div>
      )}
      {Object.values(providers).map((provider) => {
        if (provider.name === "Email") {
          return;
        }
        return (
          <div
            key={provider.name}
            className={signinStyles.button}
            onClick={() => signIn(provider.id)}
          >
            Sign in with {provider.name}
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
