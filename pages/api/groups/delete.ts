import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../util/mongodb'

export default async function CreateGroup(req: NextApiRequest, res: NextApiResponse) {
  const { db } = await connectToDatabase();
  const { group: groupId } = req.body;
  
  const result = await db.collection('groups').remove({ groupId: groupId });

  console.log(result.ops[0]);

  res.status(200);
  res.json({});
}