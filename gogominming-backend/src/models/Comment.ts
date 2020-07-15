import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  uid: String,
  content: String,
  count: Number,
  vote: [],
  chat: String
})

CommentSchema.statics.create = function(this, uid: string, content: string) {
  const commentData = new this({
    uid,
    content,
    count: 0,
    vote: [],
    chat: ''
  })

  return commentData.save();
}

CommentSchema.statics.load = async function(this, _id: string) {
  const comment = await this.findOne({_id}).select("_id content disagree agree");

  return comment; 
}

CommentSchema.methods.createChat = function(this:any, _id: any) {
  this.chat = _id;
  return this.save();
}

CommentSchema.methods.votes = async function(this: any, uid: string, agree: boolean) {
  console.log(this.vote)
  if(!this.vote.includes(uid)) {
    const base = this.count;
    this.count = agree ? base + 1 : base - 1;
    this.vote = [...this.vote, uid]

    this.save();

    return true
  }
  return false
}

export default mongoose.model<any, any>('comment', CommentSchema);