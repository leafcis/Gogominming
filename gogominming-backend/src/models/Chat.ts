import mongoose from 'mongoose';

const ChatSchema = new mongoose.Schema({
  chatlog: [],
  patient: [],
  title: String
})

ChatSchema.statics.create = function(this, target1: string, target2: string, title: string) {
  const chat= new this({
    chatlog: [],
    patient: [target1, target2],
    title
  })

  return chat.save();
}

ChatSchema.methods.isEnter = function(this, uid: string) {
  return this.patient.some((el:any) =>
    el.uid === uid
  )
}

ChatSchema.methods.isQuestioner = function(this, uid: string) {
  return this.patient[0].uid === uid;
}

ChatSchema.methods.addChat = function(this, name: string, content: string) {
  this.chatlog = [...this.chatlog, {
    name,
    content
  }]

  return this.save();
}

export default mongoose.model<any, any>('chat', ChatSchema)