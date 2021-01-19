const Comment = require('../models/Comment');


module.exports = {

    getComments : function (req,res){
        Comment.find().then(comments => {
            res.status(200).send(comments);
        })
        .catch(err =>{
           res.status(500).send('erreur en getComment' + err);
        });
    },

    addComment : function (req,res){
        let comment = new Comment({
            _id: mongoose.Schema.Types.ObjectId,
            post : req.params.postId ,
            content: req.body.content,
            author: req.body.author,
            imageUrl: req.body.imageUrl,
            category : req.body.category
        });
        Comment.save(comment).then(result => {
            res.status(200).send(result);
        }).catch(erreur => {
            res.status(500).send('erreur au niveau de AddComment' + erreur);
        })
    },

    getCommentsByPost : function (req,res) {
        Comment.findById({post  : req.params.id}).then(result => {
            res.status(200).send(result);
        })
            .catch(error => {
                res.status(500).json(error.body);
            });

    },

    modifyComment : function (req, res) {
        Comment.findByIdAndUpdate(req.body._id).then(result => {
            res.status(200).send(result);
        })
            .catch(error => {
                res.status(500).json(error.body);
            });
    },
    removeComment : function (req,res) {
        Comment.findByIdAndDelete(req.params.id).then(result => {
            res.status(200).send(result);
        })
            .catch(error => {
                res.status(500).json(error.body);
            });
    }
};
