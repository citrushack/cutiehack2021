import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../util/mongodb'

export default async function FetchGroupMembers(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { db } = await connectToDatabase();
    const { group: groupId } = req.body;
    const groups = await db.collection('groups').find({'groupId': groupId}).toArray();
    res.status(200);
    res.json({ groups });
  }
  catch {
    res.status(500);
    res.json({ error: "Unable to fetch groups..."});
  }
}