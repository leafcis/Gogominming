import { Request, Response, NextFunction } from 'express';
import jwt, { JsonWebTokenError } from 'jsonwebtoken';

const verifyJWT = (token: string) => new Promise((res, rej) => {
  jwt.verify(token, "S3CR3T_S4LT", (err, decoded) => {
    if(err) rej(err);
    res(decoded);
  })
})

const auth = async (req: any, res: Response, next: NextFunction) => {
  try {
    const headers: any = req.headers;
    const payload: any = await verifyJWT(headers.authorization);
    req.decoded = payload.uid;
    next();
  } catch (e) {
    if(e instanceof JsonWebTokenError || e instanceof jwt.TokenExpiredError) {
      res.status(401).json({e, result: 'error'});
    } else res.status(401).json({ message: 'Invalid Access', result: 'error'});
  }
}

export default auth;