import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../util/mongodb'
import { getSession } from 'next-auth/client'

export default async function JoinGroup(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  if (session) {
    try {
      const { db } = await connectToDatabase();
      const { group: [ groupId, userId, users ] } = req.body; // check # of users before calling
      await db.collection('groups').updateOne(
        {'groupId': groupId },
        { $set: {'users': users } }
      );
      await db.collection('checkins').updateOne(
        {'userId': userId },
        { $set: {'groupId': groupId } }
      );
      res.status(200).json({});
    }
    catch {
      res.status(500).json({ error: "Unable to update groups..."});
    }
  }
  else {
    res.status(401).json({});
  }
}