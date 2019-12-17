var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const { String, Number, Boolean, ObjectId } = Schema.Types;

var commentSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  author: {
    type: ObjectId,
    ref: "User"
  },
  post: {
  	type: ObjectId,
    ref: "Post"
  }
});

module.exports = mongoose.model('Comment', commentSchema)