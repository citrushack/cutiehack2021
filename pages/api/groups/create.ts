import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../util/mongodb'

export default async function CreateGroup(req: NextApiRequest, res: NextApiResponse) {
  const { db } = await connectToDatabase();
  const { group_data: [ code, name ] } = req.body;
  
  const result = await db.collection('groups').insertOne({
    groupId: code,
    users: [ name ],
    createdAt: new Date()
  });
  db.collection('checkins').updateOne(
    {'name': name },
    { $set: {'groupId': code } }
  );

  console.log(result.ops[0]);

  res.status(200);
  res.json({});
}