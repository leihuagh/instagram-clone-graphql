import mongoose, { Schema } from 'mongoose'

const userSchema = Schema({
  username: {
    type: String,
    unique: true,
    required: [true, 'username is required'],
  },
  password: String,
})

const userModel = mongoose.model('User', userSchema)

export default userModel
