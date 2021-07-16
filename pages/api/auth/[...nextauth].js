import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: 'read:user user:email',
      profile(profile) {
        return {
          id: profile.id,
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
        }
      },
    }),

    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    Providers.LinkedIn({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    signIn: async (profile, account, metadata) => {
      // https://developer.github.com/v3/users/emails/#list-email-addresses-for-the-authenticated-user
      const res = await fetch('https://api.github.com/user/emails', {
        headers: {
          Authorization: `token ${account.accessToken}`,
        },
      })
      const emails = await res.json()
      if (!emails || emails.length === 0) {
        return
      }
      // Sort by primary email - the user may have several emails, but only one of them will be primary
      const sortedEmails = emails.sort((a, b) => b.primary - a.primary)
      profile.email = sortedEmails[0].email
    },
  },
  pages: {
    signIn: '/signin',
  },
  database: process.env.MONGODB_URI,
}

export default (req, res) => NextAuth(req, res, options)
