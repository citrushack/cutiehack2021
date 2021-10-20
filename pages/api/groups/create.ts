import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../util/mongodb'
import { getSession } from 'next-auth/client'

export default async function CreateGroup(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  if (session) {
    const { db } = await connectToDatabase();
    const { group: [ groupId, userId, userName ] } = req.body;
    
    await db.collection('groups').insertOne({
      groupId: groupId,
      users: [ 
        { id: userId, name: userName }
      ],
      createdAt: new Date()
    });
    await db.collection('checkins').updateOne(
      {'userId': userId },
      { $set: {'groupId': groupId } }
    );
  
    res.status(200).json({});
  }
  else {
    res.status(401).json({});
  }
}