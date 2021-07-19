import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../util/mongodb'

export default async function CreateGroup(req: NextApiRequest, res: NextApiResponse) {
  const { db } = await connectToDatabase();
  const { group_data: [ groupId, name ] } = req.body;
  
  const result = await db.collection('groups').insertOne({
    groupId: groupId,
    users: [ name ],
    createdAt: new Date()
  });

  console.log(result.ops[0]);

  res.status(200);
  res.json({});
}