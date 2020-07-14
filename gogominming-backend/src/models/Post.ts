import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  uid: String,
  title: String,
  post: String,
  comments: [],
})

PostSchema.statics.create = function(this: any, uid: string, title: string, post: string) {
  const postData = new this({
    uid,
    title,
    post,
    comments: []
  })

  return postData.save();
}

PostSchema.statics.load = async function(this: any, uid: string) {
  const postList = await this.find({uid: {$ne : uid}}).select("title _id post comments").lean();

  return postList;
}

PostSchema.statics.myload = async function(this: any, uid: string) {
  const postList = await this.find({uid: uid}).select("title _id post comments").lean();

  return postList;
}

PostSchema.methods.createComment = function(this: any, _id: string) {
  this.comments = [...this.comments, _id];

  return this.save();
}

export default mongoose.model<any, any>('post', PostSchema)