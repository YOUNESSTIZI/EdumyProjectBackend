
const mongoose = require('mongoose');
let Category = require("../models/Category");

// c bon pour celle la
exports.getCategories = (req, res) => {
    Category.find().populate('moder','userName').then(categories => {
        res.status(201).json(categories);
    })
        .catch(error => res.status(400).json({error}));

};

// c bon pour celle la
exports.createCategory = (req, res, next) => {

    const category = new Category({
        _id : mongoose.Types.ObjectId(),
        name: req.body.name,
        moder: req.body.moder
    });

    console.log(category);

    category.save().then(result=>{
        res.status(201).send(result);
    });

};

// c bon pour celle la
exports.getCategoryById = (req, res, next) => {
    Category.findById(req.params.id).then(result =>{
        res.status(201).json(result);
    }).catch(error =>{
        res.status(500).json(error);
    });

};

// c bon pour celle la
exports.getCategoryByName = (req, res, next) => {
    Category.findOne({name : req.params.name}).then(result =>{
        res.status(201).json(result);
    }).catch(error =>{
        res.status(500).json(error);
    });

};
// c bon pour celle la
exports.deleteCategory = (req, res, next) => {
    Category.findByIdAndRemove(req.params.id).then(result => {
        res.status(200).json(result);
    }).catch(error =>{
        res.status(500).json(error);
    })

};

// c bon pour celle la
exports.updateCategory = (req, res, next) => {
    Category.findByIdAndUpdate(req.body._id,req.body).then(result => {
        Category.findOne({_id : req.body._id}).then(category =>{
            res.status(200).json(category);
        });
    }).catch(error =>{
        res.status(500).json(error);
    });

};



