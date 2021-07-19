import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../util/mongodb'

export default async function JoinGroup(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { db } = await connectToDatabase();
    const { group_data: [ code, users ] } = req.body; // check # of users before calling
    db.collection('groups').updateOne(
      {'groupId': code },
      { $set: {'users': users } }
    );
    res.status(200);
  }
  catch {
    res.status(500);
    res.json({ error: "Unable to update groups..."});
  }
}