import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../util/mongodb'
import { getSession } from 'next-auth/client'

export default async function FetchCheckIn(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  if (session) {
    try {
      const { db } = await connectToDatabase();
      const { user: id } = req.body;
      const checkins = await db.collection('checkins').find({'userId': id}).toArray();
      res.status(200).json({ checkins });
    }
    catch {
      res.status(500).json({ error: "Unable to fetch checkins..."});
    }
  }
  else {
    res.status(401).json({});
  }
}