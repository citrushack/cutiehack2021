import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../util/mongodb'

export default async function LeaveGroup(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { db } = await connectToDatabase();
    const { group_data: [ name, code, users ] } = req.body; // check # of users before calling
    db.collection('groups').updateOne(
      {'groupId': code },
      { $set: {'users': users } }
    );
    db.collection('checkins').updateOne(
      {'name': name },
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