
var Transaction = require('../models/transaction')
var User = require('../models/user')

exports.getAllTransactions = (req, res, next) =>{
    console.log("co vo transaction");
    Transaction.find({}, (err, transactions)=> {
        if(err){
            console.log(err);
            res.send(err);
            return;
        }
        res.json({status : 1, transactions : transactions});
    });
}


exports.getLatestTransactionsBySenderId = (req, res, next)=>{
    console.log("senderId" + req.params.senderId);
    Transaction.find({senderId : req.params.senderId}).sort({tradingDate : -1}).limit(10)
    .exec((err, transactions)=>{
        if(err){
            console.log(err);
            res.send(err);
            return;
        }
        res.json({status : 1, transactions : transactions});
    });
}


exports.getLatestTransactionsByReceiverId = (req, res, next)=>{

    Transaction.find({receiverId : req.params.receiverId}).sort({tradingDate : -1}).limit(10)
    .exec((err, transactions)=>{
        if(err){
            console.log(err);
            res.send(err);
            return;
        }
        res.json({status : 1, transactions : transactions});
    });
}





    exports.addTransaction = (req, res, next) => {
        var transaction = req.body;


        User.findOne({walletId : transaction.senderId}, (err, sender)=>{
        console.log("find sender");
            if(err){
                res.send(err);
                return;
        }
        if(sender.balances < transaction.amount){
            res.json({status : 0, message : 'Your balance is not enough to send'});
            return;
        }

        User.findOne({walletId : transaction.receiverId}, (err, receiver)=>{
            console.log("find receiver");
            if(err){
                res.send(err);
                return;
            }
            if(!receiver){
                res.json({status : 0, message : 'Receiver address is incorrect'});
                return;
            }

            var newTransaction = new Transaction({
                senderId : transaction.senderId,
                receiverId : transaction.receiverId,
                tradingDate : transaction.tradingDate,
                amount : parseInt(transaction.amount)
            });
            
            console.log("new transaction : ",newTransaction);

            newTransaction.save((err, newTransaction)=>{
                console.log("save transaction");
                if(err){
                    res.send(err);
                    return;
                }
                receiver.balances = parseInt(receiver.balances + newTransaction.amount);
                sender.balances = parseInt(sender.balances - newTransaction.amount);

                receiver.save((err, receiver)=>{
                    if(err){
                        res.send(err);
                        return;
                    }
                    sender.save((err, receiver)=>{
                        if(err){
                            res.send(err);
                            return;
                        }
                        console.log("sender ", sender);
                        res.json({status : 1, user : sender, message : 'BTC was send successfully'});
                    })
                    
                });
            });
        });

    });
}