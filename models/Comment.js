var mongoose = require('mongoose'), Schema = mongoose.Schema;

var CommentSchema = new mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    post : { type: Schema.Types.ObjectId, ref: 'Post' },
    content: String,
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    imageUrl: String,
    category : { type: Schema.Types.ObjectId, ref: 'Category' },
    replies: {type: Schema.Types.Array, ref: 'Comment'}
});

module.exports = mongoose.model('Comment', CommentSchema);
