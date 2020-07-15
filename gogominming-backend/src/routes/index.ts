import { Response, Request, Router } from 'express';
import chat from './chat';
import auth from './auth';
import post from './post';
import comment from './comment';

const router = Router();

router.get('/', (req: Request, res: Response) => res.status(200).json({ result: 'OK'}))
       .use('/chat', chat)
       .use('/auth', auth)
       .use('/post', post)
       .use('/comment', comment);

export default router;