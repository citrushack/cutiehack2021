import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../util/mongodb'

export default async function CreateGroup(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { db } = await connectToDatabase();
    const { group: [ groupId, userId ] } = req.body; // check # of users before calling
    db.collection('groups').deleteOne({ groupId: groupId });
    db.collection('checkins').updateOne(
      {'userId': userId },
      { $set: {'groupId': '' } }
    );
    res.status(200);
    res.json({});
  }
  catch {
    res.status(500);
    res.json({ error: "Unable to update groups..."});
  }
}