import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../util/mongodb'
import { getSession } from 'next-auth/client'

export default async function FetchGroupMembers(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  if (session) {
    try {
      const { db } = await connectToDatabase();
      const { group: groupId } = req.body;
      const groups = await db.collection('groups').find({'groupId': groupId}).toArray();
      res.status(200).json({ groups });
    }
    catch {
      res.status(500).json({ error: "Unable to fetch groups..."});
    }
  }
  else {
    res.status(401).json({});
  }
}