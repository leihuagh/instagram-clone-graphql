import mongoose, { Schema } from 'mongoose'

const postSchema = Schema({
  by: {
    type: {},
    required: true,
  },
  desc: String,
  photo: String,
  likedBy: {
    type: [],
    default: [],
  },
  comments: {
    type: [],
    default: [],
  },
  createdAt: {
    type: String,
    default: new Date(),
  },
})

const postModel = mongoose.model('Post', postSchema)

export default postModel
