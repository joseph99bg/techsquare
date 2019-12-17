var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const { String, Number, Boolean, ObjectId } = Schema.Types;

var postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  author: {
    type: ObjectId,
    ref: "User"
  },
  createdAt: {
    type: String,
    default: new Date()
  },
  comments: [{ type: ObjectId, ref: 'Comment' }],
});

module.exports = mongoose.model('Post', postSchema)