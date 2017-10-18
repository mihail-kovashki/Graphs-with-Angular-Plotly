const mongoose = require('mongoose')

let commentSchema = mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  authorName: { type: mongoose.Schema.Types.String, required: true },
  content: { type: mongoose.Schema.Types.String, required: true },
  graph: { type: mongoose.Schema.Types.ObjectId, ref: 'Graph' },
  dateCreated: { type: mongoose.Schema.Types.Date, default: Date.now }
})

let Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment
