import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../util/mongodb'

export default async function FetchUsers(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { db } = await connectToDatabase();
    const users = await db.collection('users').find().toArray();
    res.status(200);
    res.json({ users });
  }
  catch {
    res.status(500);
    res.json({ error: "Unable to fetch groups..."});
  }
}