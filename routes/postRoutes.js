
let express = require('express');

let router = express.Router();

let postController = require('../controlleur/postController');
const multer = require('../Middleware/multer-config');

router.get('/posts', postController.getPosts);
router.get('/posts/:id',postController.getPostById);
router.get('/posts/title/:title',postController.getPostByName);
router.post('/posts',multer, postController.addPost);
router.put('/posts',postController.updatePost);
router.delete('/posts/:id',postController.deletePost);
router.delete('/postsall',postController.deleteAll);


module.exports = router;
