
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength : 6 },
    walletId : {type : String, required : true, minlength : 36, maxlength : 36},
    balances : {type : Number, min : 0, required : true}
})

module.exports = mongoose.model('User', UserSchema);