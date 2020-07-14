import { Router, Request, Response } from 'express';
import { Post, User } from '../../models'
import crypto from 'crypto';
import auth from '../../middlewares/auth.middle';

type AuthFunction<T, F> = (request: T, response: F) => void;

const router = Router({ mergeParams: true});

const createPost: AuthFunction<any, Response> = async (request, response) => {
  const uid = request.decoded;
  const { post, title } = request.body;
  console.log(post, title)
  if(title === "" || title === undefined || post === "" || post === undefined) throw new Error("공란이 존재합니다.");
  try {
    const res = await Post.create(uid, title, post);
    const info = await User.findOne({ uid });
    await info.createPost(res._id);
    response.status(200).json({result: "success"})
  }
  catch (error) {
    response.status(400).json(error.message);
  }
}

const loadPost: AuthFunction<any, Response> = async (request, response) => {
  const uid = request.decoded;
  try {
    const postList = await Post.load( uid );
    response.status(200).json({result: postList})
  }
  catch (error) {
    response.status(400).json(error.message);
  }
}


router.use(auth);
router.post('/create', createPost);
router.get('/load', loadPost);

export default router;