var mongoose = require('mongoose'),Schema = mongoose.Schema;

var CategorySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  desc: String,
  imageUrl: String,
  moder: { type: Schema.Types.ObjectId, ref: 'User', required:true }

});

module.exports = mongoose.model('Category', CategorySchema);
