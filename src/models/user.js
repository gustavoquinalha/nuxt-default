import mongoose from 'mongoose'

let schema = mongoose.Schema({
  name: String,
  email: String,
  password: String
}, {
  timestamps: true
})

export default mongoose.model('user', schema)