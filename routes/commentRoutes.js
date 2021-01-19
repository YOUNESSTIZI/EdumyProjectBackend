
let commentController = require('../controlleur/commentController');

let express = require('express');

let router = express.Router();

router.get('/comments',commentController.getComments);
router.get('/comments/:postId', commentController.getCommentsByPost);
router.post('/comments/:postId',commentController.addComment);
router.put('/comments/:commentId',commentController.modifyComment);
router.delete('/comments/:commentId/posts/:postId',commentController.removeComment);

module.exports = router;
