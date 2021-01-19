const mongoose = require('mongoose');
//this uniqueValidator is used to validate user saving ! for instance : it returns error while detecting duplicates !
const uniqueValidator = require('mongoose-unique-validator');


const userSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    userName: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},

    isAdmin: { type : Boolean,
        required : true,
        default : false
    }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User',userSchema);
