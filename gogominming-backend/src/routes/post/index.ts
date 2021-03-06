import { Router, Request, Response } from 'express';
import { Post, User, Comment, Chat } from '../../models'
import crypto from 'crypto';
import auth from '../../middlewares/auth.middle';

type AuthFunction<T, F> = (request: T, response: F) => void;

const router = Router({ mergeParams: true});

const createPost: AuthFunction<any, Response> = async (request, response) => {
  const uid = request.decoded;
  const { post, title } = request.body;
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
    const returnPostList = await Promise.all(postList.map(async (el:any) => {
      const commentList = await Promise.all(
        el.comments.map((data:any) => {
          return Comment.load(data)
        })
      )

      return {
          ...el,
          comments: commentList
      }
    }))
    response.status(200).json({result: returnPostList})
  }
  catch (error) {
    console.log(error.message)
    response.status(400).json(error.message);
  }
}

const mypageLoadPost: AuthFunction<any, Response> = async (request, response) => {
  const uid = request.decoded;
  try {
    const postList = await Post.myload( uid );
    const chatList = await User.findOne({uid}).select("chat").lean()
    const returnChatList = await Promise.all(chatList.chat.map(async (el: any) => {
      const chatInfo = await Chat.findOne({_id: el});
      let isQuestioner = false;
      if(chatInfo.patient[0].uid === uid) isQuestioner = true;
      console.log(chatInfo)
      return {
        _id: chatInfo._id,
        title: chatInfo.title,
        isQuestioner
      }
    }))
    console.log(returnChatList)
    response.status(200).json({result: {
        post: postList,
        chat: returnChatList,
      }
    })
  }
  catch (error) {
    console.log(error)
    response.status(400).json(error.message);
  }
}

router.use(auth);
router.post('/create', createPost);
router.get('/load', loadPost);
router.get('/mypage', mypageLoadPost);

export default router;