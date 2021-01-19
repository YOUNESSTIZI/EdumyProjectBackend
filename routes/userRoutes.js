
let express = require('express');

let router = express.Router();

let userController = require('../controlleur/userController');

router.get('/users', userController.getUsers);
router.get('/users/:id',userController.getUserById);
router.post('/users',userController.signUp);
router.delete('/users',userController.deleteUser);
router.put('/users',userController.updateUser);
router.delete('/users/:id',userController.deleteUserById);

module.exports = router;
