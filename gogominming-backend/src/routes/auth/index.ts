import { Router, Request, Response } from 'express';
import { User } from '../../models'
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

type AuthFunction<T, F> = (request: T, response: F) => void;

const router = Router();

const login: AuthFunction<Request, Response> = async (request, response) => {
  const { uid, password } = request.body;
  const encryptedPassword = crypto.createHash('sha512').update(password).digest('base64');
  const secret = "S3CR3T_S4LT";
  try {
    if (await User.isExist(uid)) {
      const info = await User.findOne({ uid })
      const { nickname, post, chat } = info;
      if (await info.verify(encryptedPassword)) {
        const token = jwt.sign({
          uid
        }, secret)
        response.status(200).json({
          accessToken: token,
          nickname,
          post,
          chat
        })
      }
      else throw new Error('서버의 데이터와 일치하지 않습니다.')
    }
    else throw new Error('서버의 데이터와 일치하지 않습니다.')
  }
  catch (error) {
    response.status(400).json(error.message);
  }
}

const register: AuthFunction<Request, Response> = async (request, response) => {
  const { uid, nickname, password } = request.body;
  const encryptedPassword = crypto.createHash('sha512').update(password).digest('base64');
  try {
    if (uid.length < 4 && uid.include(' ')) throw new Error('id는 최소 4자 이상으로, 공백이 없어야 합니다.');
    else if (password === undefined || nickname === undefined || password === "" || nickname === "") throw new Error('공란이 존재합니다.');
    else if (!await User.isExist(uid)) {
      try {
        await User.create(uid, encryptedPassword, nickname)
        response.status(200).json({ result: 'success' })
      }
      catch (error) {
        response.status(400).json(error);
      }
    }
    else throw new Error('이미 존재하는 id입니다')
  }
  catch (error) {
    response.status(400).json(error.message);
  }
}

router.post('/login', login);
router.post('/register', register);

export default router;