
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TransactionSchema = new Schema({
    senderId : {type : String, required : true, minlength : 36, maxlength : 36},
    receiverId : {type : String, required : true, minlength : 36, maxlength : 36},
    amount : {type : Number, required : true},
    tradingDate : {type : Date}
});


module.exports = mongoose.model('Transaction', TransactionSchema);