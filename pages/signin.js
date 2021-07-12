import React from "react";
import { providers, signIn, getSession } from "next-auth/client";
export default function SignIn({ providers }) {
  return (
    <div>
      {Object.values(providers).map((provider) => {
        if (provider.name === "Email") {
            return;
        }
      return (
        <div key={provider.name}>
          <button variant="outline" onClick={() => signIn(provider.id)}>
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