
const mongoose = require('mongoose');
const Post = require("../models/Post");
const Category = require("../models/Category");
let filePdf;
let fileImage;

exports.setImageName = (fileName) =>{
    fileImage = fileName;
};

exports.setDocumentName = (fileName) =>{
    filePdf = fileName;
};

// c bon pour celle la
exports.getPosts = (req, res,next) => {
    Post.find().populate('author','userName').populate('category','name').then(posts => {
        res.status(200).send(posts);
    })
        .catch(error => {
            res.status(500).send('erreur dans getPosts' + error);
        })
};
// c bon pour celle la
exports.getPostById = (req, res, next) => {
    Post.findOne({_id :req.params.id})
        .populate('author','userName')
        .populate('category','name')
        .exec(function (err, post) {
                if (err) return next(err);
                res.json(post);
         }
    );
};
// c bon pour celle la
exports.getPostByName = (req, res, next) => {
    Post.findOne({title :req.params.title})
        .populate('author','userName')
        .populate('category','name')
        .exec(function (err, post) {
                if (err) return next(err);
                res.json(post);
            }
        );
};
// c bon pour celle la
exports.addPost = (req, res, next) => {
    console.log('adding post');
    console.log(req.body);


        Category.findOne({name : req.body.category}).then(result =>{
            const post = new Post({
                _id: mongoose.Types.ObjectId(),
                title: req.body.title,
                paragraph: req.body.paragraph,
                author: req.body.author,
                imageUrl: `${req.protocol}://${req.get('host')}/Files/${fileImage}`,
                category: result,
                fileUrl:  `${req.protocol}://${req.get('host')}/Files/${filePdf}`
            });

            console.log(post);
            post.save().then(result => {
                filePdf = null;
                fileImage = null;
                res.status(200).json(result);
            })
                .catch(err =>{
                    res.status(500).json(err);
                })

        }).catch(err =>{
            res.status(500).json(err);
        });




};

//c bon pour celle la
exports.updatePost = (req, res, next) => {
    Post.findByIdAndUpdate(req.body._id,req.body, function (err, post) {
        if (err) return next(err);
        Post.findOne({_id: req.body._id}).then(post =>{
            res.status(200).send(post);
        })
            .catch(error => {
                res.status(500).send('error updatePost' + error);
            })
    });
};

// c bon pour celle la
exports.deletePost = (req, res, next) => {
    Post.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
};

exports.deleteAll = (req, res, next) => {
    Post.deleteMany().then(result =>{
        res.status(200);
    });
};




