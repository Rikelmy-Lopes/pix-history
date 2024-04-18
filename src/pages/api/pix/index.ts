import { readDB, updateDB } from '@/utils/database';
import { isTokenValid } from '@/utils/jwt';
import { NextApiRequest, NextApiResponse } from 'next';


async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { title, message } = req.body;
  if (!title || !message) {
    return res.status(400).json({ message: 'One or more fields not filled!'});
  }
  await updateDB([{
    title,
    message,
    createAt: Date.now(),
  }]);
  res.status(201).json({ message: 'Pix saved Successful!!!' });
}

async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not filled!'});
  }

  if (isTokenValid(authorization)) {
    const pixs = await readDB();
    return res.status(200).json(pixs);
  } else {
    return res.status(401).json({ message: 'Invalid Token!'});
  }
}
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    await POST(req, res);
  } else if (req.method === 'GET') {
    await GET(req, res);
  } else {
    res.status(405).json({ message: 'Method not allowed'});
  }
}