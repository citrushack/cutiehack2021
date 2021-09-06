/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next'
import { sendEmail } from '../../util/sendEmail'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email } = req.body;
    await sendEmail({ email });
    return res.status(200).end();
  }
  return res.status(404).json({
    error: {
      code: 'not_found',
      messgae: "The requested endpoint was not found or doesn't support this method."
    }
  });
}