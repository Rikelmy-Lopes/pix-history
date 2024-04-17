import jwt from 'jsonwebtoken';

export function generateJWT() {
  const secret = process.env.SECRET_KEY as string;
  return jwt.sign({ message: 'Token for pix history' }, secret, { expiresIn: '1h'});
}

export function isTokenValid(token: string) {
  try {
    const secret = process.env.SECRET_KEY as string;
    jwt.verify(token, secret);
    return true;
  } catch (error) {
    return false;
  }
}