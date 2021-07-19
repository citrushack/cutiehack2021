import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../util/mongodb'

export default async function CreateCheckIn(req: NextApiRequest, res: NextApiResponse) {
  const { db } = await connectToDatabase();
  const {
    checkin_data: [ name, email, race, gender, school, major, grade, first_time ]
  } = req.body;
  
  const result = await db.collection('checkins').insertOne({
    name: name,
    email: email,
    race: race,
    gender: gender,
    school: school,
    major: major,
    grade: grade,
    firstTimeHacker: first_time,
    createdAt: new Date()
  });

  console.log(result.ops[0]);

  res.status(200);
  res.json({});
}