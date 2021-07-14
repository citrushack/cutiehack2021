import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../util/mongodb'

export default async function(req: NextApiRequest, res: NextApiResponse) {
  const { db } = await connectToDatabase();
  const {
    checkin_data: [ race, gender, school, major, grade, first_time ]
  } = req.body;

  console.log(req.body);
  
  const result = await db.collection('checkins').insertOne({
    race: race,
    gender: gender,
    school: school,
    major: major,
    grade: grade,
    firstTimeHacker: first_time
  });

  console.log(result.ops[0]);

  res.json({});
}