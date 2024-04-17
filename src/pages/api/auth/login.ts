import { NextApiRequest, NextApiResponse } from 'next';
import { generateJWT, isTokenValid } from '@/utils/jwt';


function POST(req: NextApiRequest, res: NextApiResponse) {
  const { password } = req.body;
  if (password === process.env.PASSWORD) {
    res.status(201).json({ token: generateJWT() });
  } else {
    res.status(401).json({ message: 'Password not correct! '});
  }
}

function GET(req: NextApiRequest, res: NextApiResponse) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not filled'});
  }

  if (isTokenValid(authorization)) {
    res.status(200).json({ message: 'Successful'});
  } else {
    res.status(401).json({ message: 'Invalid token'});
  }
}


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    POST(req, res);
  } else if (req.method === 'GET') {
    GET(req, res);
  } else {
    res.status(405).json({ message: 'Method not allowed!'});
  }
}