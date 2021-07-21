import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../util/mongodb'

export default async function JoinGroup(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { db } = await connectToDatabase();
    const { group: [ groupId, userId, users ] } = req.body; // check # of users before calling
    db.collection('groups').updateOne(
      {'groupId': groupId },
      { $set: {'users': users } }
    );
    db.collection('checkins').updateOne(
      {'userId': userId },
      { $set: {'groupId': groupId } }
    );
    res.status(200);
    res.json({});
  }
  catch {
    res.status(500);
    res.json({ error: "Unable to update groups..."});
  }
}