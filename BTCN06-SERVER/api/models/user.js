
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength : 6 },
    walletId : {type : String, required : true, minlength : 36, maxlength : 36},
    balances : {type : Number, min : 0, required : true},
    stokenID : {type : String, required : true, minlength : 36, maxlength : 36},
    active : {type : Boolean, required : true},
    privateKey:{type : String, required : true, minlength : 1},
    publicKey:{type : String, required : true, minlength : 1},
    address:{type : String, required : true, minlength : 1},
})

module.exports = mongoose.model('User', UserSchema);