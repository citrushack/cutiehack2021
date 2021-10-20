/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next'
import { sendEmail } from '../../util/sendEmail'
import { getSession } from 'next-auth/client'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  if (session) {
    if (req.method === 'POST') {
      const { email, template_id, name, members, invite_code, newcomer } = req.body;
      await sendEmail({ email, template_id, name, members, invite_code, newcomer });
      return res.status(200).end();
    }
    return res.status(404).json({
      error: {
        code: 'not_found',
        messgae: "The requested endpoint was not found or doesn't support this method."
      }
    });
  }
  else {
    res.status(401).json({});
  }
}