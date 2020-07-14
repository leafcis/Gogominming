import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  uid: String,
  content: String,
  count: Number,
  vote: []
})

CommentSchema.statics.create = function(this, uid: string, content: string) {
  const commentData = new this({
    uid,
    content,
    count: 0,
    vote: []
  })

  return commentData.save();
}

CommentSchema.statics.load = async function(this, _id: string) {
  const comment = await this.findOne({_id}).select("_id content disagree agree");

  return comment; 
}

CommentSchema.methods.votes = function(this: any, _id:string, uid: string, agree: boolean) {
  if(this.vote.include(uid)) {
    const base = this.count;
    this.count = agree ? base + 1 : base - 1;

    this.save();

    return true
  }
  return false
}

export default mongoose.model<any, any>('comment', CommentSchema);