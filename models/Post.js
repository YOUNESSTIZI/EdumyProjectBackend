var mongoose = require('mongoose'), Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  paragraph: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  imageUrl: {type: String, required: false , default: null},
  fileUrl: {type: String, required: false , default: null},
  category : { type: Schema.Types.ObjectId, ref: 'Category' }

});

module.exports = mongoose.model('Post', PostSchema);
