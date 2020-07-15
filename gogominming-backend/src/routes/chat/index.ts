import { Router, Request, Response } from 'express';
import { User, Comment, Chat } from '../../models'
import auth from '../../middlewares/auth.middle';

type AuthFunction<T, F> = (request: T, response: F) => void;

const router = Router({ mergeParams: true});

const createRoom: AuthFunction<any, Response> = async (request, response) => {
  const uid = request.decoded;
  const { _id, title } = request.body;
  console.log(title)
  try {
    const targetComment = await Comment.findOne({_id});
    let chatId = '';
    if(!targetComment.chat) {
      const target1 = await User.findOne({uid});
      const target2 = await User.findOne({uid: targetComment.uid});
      const chatInfo = await Chat.create(target1, target2, title);
      chatId = chatInfo._id;
      await targetComment.createChat(chatId);
      await Promise.all([target1.createChat(chatId), target2.createChat(chatId)]);
    }
    else {
      chatId = targetComment.chat;
    }
    response.status(200).json({result: chatId});
  }
  catch (error) {
    response.status(400).json({result: "error"})
  }
}

const joinRoom: AuthFunction<any, Response> = async (request, response) => {
  const uid = request.decoded;
  const { params: _id } = request.params;
  try {
    const chatInfo = await Chat.findOne({_id});
    if(chatInfo) {
      if(await chatInfo.isEnter(uid)) {
        const returnChatInfo = await Chat.findOne({_id}).select("chatlog title")
        const isQuestioner = await chatInfo.isQuestioner(uid);
        response.status(200).json({result: { info: returnChatInfo, isQuestioner }});
      }
      else {
        response.status(403).json({result: "접근권한 없음"})
      }
    }
    else {
      response.status(403).json({result: "접근권한 없음"})
    }
  }
  catch (error) {
    response.status(400).json(error.message);
  }
}

router.use(auth);
router.post('/create', createRoom);
router.get('/join/:params', joinRoom);

export default router