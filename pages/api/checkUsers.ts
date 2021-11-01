import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../util/mongodb'

export default async function CheckUsers(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { db } = await connectToDatabase();
    const checkins = await db.collection('checkins').find({ qualified: "yes" }).toArray();
    const users = await db.collection('users').find({}).toArray();
    const checkinEmails = checkins.map(({email}) => email)
    const userEmails = users.map(({email}) => email)

    res.status(200).json({ checkinEmails, userEmails });
  }
  catch {
    res.status(500).json({ error: "Unable to fetch checkins..."});
  }
}