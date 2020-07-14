import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  uid: String,
  content: String,
  disagree: Number,
  agree: Number
})

export default CommentSchema;