import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../util/mongodb'

export default async function FetchUsers(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { db } = await connectToDatabase();
    const checkins = await db.collection('checkins').find().toArray();
    res.status(200).json({ checkins });
  }
  catch {
    res.status(500).json({ error: "Unable to fetch users..."});
  }
}