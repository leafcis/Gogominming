import { Router, Request, Response } from 'express';
import { Post, User, Comment } from '../../models'
import auth from '../../middlewares/auth.middle';

type AuthFunction<T, F> = (request: T, response: F) => void;

const router = Router({ mergeParams: true});

const createComment: AuthFunction<any, Response> = async (request, response) => {
  const uid = request.decoded;
  const { comment, _id } = request.body;
  if(comment === "" || comment === undefined) throw new Error("공란이 존재합니다.");
  try {
    const res = await Comment.create(uid, comment);
    console.log(res)
    const info = await Post.findOne({ _id });
    await info.createComment(res._id);
    response.status(200).json({result: "success"})
  }
  catch (error) {
    response.status(400).json(error.message);
  }
}

const mypageLoadComment: AuthFunction<any, Response> = async (request, response) => {
  const { params: _id } = request.params;
  try {
    const post = await Post.findOne({_id});
    const comments = await Promise.all(post.comments.map(async (el:any) => 
      await Comment.findOne(el)
    ))
    response.status(200).json({result: comments.filter((el:any) => 
      el.count > 0
    )})
  }
  catch (error) {
    response.status(400).json(error.message);
  }
}

const voteComment: AuthFunction<any, Response> = async (request, response) => {
  const uid = request.decoded;
  const { _id, agree } = request.body;
  try {
    const commentInfo = await Comment.findOne({ _id })
    if(await commentInfo.votes(uid, agree)) {
      response.status(200).json({result: 'success'})
    }
    else {
      response.status(200).json({result: '이미 눌렀음'});
    }
  }
  catch(error) {
    console.log(error)
    response.status(400).json(error.message)
  }
}

router.use(auth);
router.post('/create', createComment);
router.post('/vote', voteComment);
router.get('/mycomment/:params', mypageLoadComment);

export default router;