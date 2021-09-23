import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../util/mongodb'
import { getSession } from 'next-auth/client'

export default async function FetchUsers(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  if (session) {
    try {
      const { db } = await connectToDatabase();
      const users = await db.collection('users').find().toArray();
      res.status(200).json({ users });
    }
    catch {
      res.status(500).json({ error: "Unable to fetch groups..."});
    }
  }
  else {
    res.status(401).end();
  }
}