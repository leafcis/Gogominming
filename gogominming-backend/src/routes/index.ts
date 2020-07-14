import { Response, Request, Router } from 'express';
//import chat from './chat';
import auth from './auth';
import post from './post';

const router = Router();

router.get('/', (req: Request, res: Response) => res.status(200).json({ result: 'OK'}))
       .use('/auth', auth)
       .use('/post', post);

export default router;