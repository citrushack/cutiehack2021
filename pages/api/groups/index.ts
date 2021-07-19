import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../util/mongodb'

export default async function FetchGroupMembers(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { db } = await connectToDatabase();
    const { group_data: code } = req.body;
    const groups = await db.collection('groups').find({'groupId': code}).toArray();
    res.status(200);
    res.json({ groups });
  }
  catch {
    res.status(500);
    res.json({ error: "Unable to fetch groups..."});
  }
}