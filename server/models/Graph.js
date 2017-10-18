const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'
const maxlength = [1000, 'The link content exceeds the maximum allowed length of {MAXLENGTH} characters.']

let graphSchema = new mongoose.Schema({
  graphName: { type: String, required: REQUIRED_VALIDATION_MESSAGE, maxlength: maxlength },
  graphLink: { type: String, required: REQUIRED_VALIDATION_MESSAGE, maxlength: maxlength },
  graphCategory: { type: String,
    enum: {
      values: ['Business', 'Demography and Social', 'Macroeconomic', 'Other'],
      message: 'Category should be either "Business", "Demography and Social","Macroeconomic" or "Other"'
    } },
  author: { type: ObjectId, required: REQUIRED_VALIDATION_MESSAGE, ref: 'User' },
  authorUsername: { type: String },
  creationDate: { type: Date, default: Date.now },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
})

let indexFields = {
  comments: 'text'
}

graphSchema.index(indexFields)

let Graph = mongoose.model('Graph', graphSchema)

module.exports = Graph
