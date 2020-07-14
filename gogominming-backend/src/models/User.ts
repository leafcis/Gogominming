import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  uid: String,
  password: String,
  nickname: String,
  post: Array,
  chat: Array
})

UserSchema.statics.create = function(this, uid: string, password: string, nickname: string) {
  const info = new this({
    uid,
    password,
    nickname,
    post: [],
    chat: []
  })

  return info.save();
}

UserSchema.statics.isExist = async function(this, uid: string) {
  const info = await this.findOne({ uid });
  if(info) return true;
  return false;
}

UserSchema.methods.verify = function(this, password: string) {
  return this.password === password;
}

UserSchema.methods.createPost = function(this, _id: string) {
  this.post = [...this.post, _id];

  return this.save();
}

export default mongoose.model<any, any>('user', UserSchema);