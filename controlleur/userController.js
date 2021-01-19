let User = require("../models/User");
const crypt = require('bcrypt');
const mongoose = require('mongoose');

// c bon pour celle la
exports.getUsers = (req,res,next) =>{
    User.find().then(users => {
        res.status(200).json({users});
    })
        .catch(error => res.status(400).json({error}));
};

// c bon pour celle la
exports.getUserById = (req,res,next) => {
    console.log(req.params.id);
    User.findOne({_id : req.params.id}).then(result => {
        res.status(200).send(result);
    })
        .catch(error => {
            res.status(500).json(error.body);
        });
};

// c bon pour celle la
exports.signUp = (req, res, next) => {
     console.log(req.body);
    crypt.hash(req.body.password, 2)
        .then(hash => {
                 const user = new User({
                     _id : mongoose.Types.ObjectId(),
                     userName: req.body.userName,
                     email: req.body.email,
                     password: hash
                 });
                 console.log('voila le user' + user);
                 user.save().then(result=>{
                        res.status(201).send(result);
                 });
        })
        .catch(error => res.status(500).json({error}));


};


exports.deleteUser = (req,res,next) => {
    console.log(req.params.id);
    User.remove().then(result => res.status(200).send(result))
        .catch(error => {
            console.log(error);

        });
};

// c bon pour celle la
exports.updateUser = (req,res,next) => {
    console.log(req.params.body);
    User.findByIdAndUpdate(req.body._id, req.body, function (err, post) {
        if (err) return next(err);
        res.status(200).send({message : " well updated"});
    });
};

// c bon pour celle la
exports.deleteUserById = (req,res,next) => {
    console.log(req.params.id);
    User.deleteOne({_id: req.params.id}).then(result => {
        res.status(200).send({message: "c bien rejeté"});

    })
        .catch(error => {
            console.log(error);
            res.status(500).json(error.body)
        });
};
