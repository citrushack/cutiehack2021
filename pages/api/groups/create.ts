import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../util/mongodb'

export default async function CreateGroup(req: NextApiRequest, res: NextApiResponse) {
  const { db } = await connectToDatabase();
  const { group: [ groupId, userId, userName ] } = req.body;
  
  const result = await db.collection('groups').insertOne({
    groupId: groupId,
    users: [ 
      { id: userId, name: userName }
    ],
    createdAt: new Date()
  });
  db.collection('checkins').updateOne(
    {'userId': userId },
    { $set: {'groupId': groupId } }
  );

  console.log(result.ops[0]);

  res.status(200);
  res.json({});
}