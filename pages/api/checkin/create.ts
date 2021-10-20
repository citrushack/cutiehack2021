import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../util/mongodb'
import { getSession } from 'next-auth/client'

export default async function CreateCheckIn(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  if (session) {
    const { db } = await connectToDatabase();
    const {
      user: [ name, email, race, gender, school, major, grade, first_time, grad, id ]
    } = req.body;
    
    await db.collection('checkins').insertOne({
      name: name,
      email: email,
      race: race,
      gender: gender,
      school: school,
      major: major,
      grade: grade,
      firstTimeHacker: first_time,
      graduate: grad,
      userId: id,
      qualified: '',
      groupId: '',
      createdAt: new Date()
    });
  
    res.status(200).json({});
  }
  else {
    res.status(401).json({});
  }
}