
import { state } from '@/state/state';
import { isTokenValid } from '@/utils/jwt';
import { NextApiRequest, NextApiResponse } from 'next';


function POST(req: NextApiRequest, res: NextApiResponse) {
  const { title, message } = req.body;
  if (!title || !message) {
    return res.status(400).json({ message: 'One or more fields not filled!'});
  }
  state.pixs.push({
    title,
    message,
    createAt: Date.now(),
  });
  res.status(201).json({ message: 'Pix saved Successful!!!' });
}

function GET(req: NextApiRequest, res: NextApiResponse) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not filled!'});
  }

  if (isTokenValid(authorization)) {
    return res.status(200).json(state.pixs);
  } else {
    return res.status(401).json({ message: 'Invalid Token!'});
  }
}
 
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    POST(req, res);
  } else if (req.method === 'GET') {
    GET(req, res);
  } else {
    res.status(405).json({ message: 'Method not allowed'});
  }
}