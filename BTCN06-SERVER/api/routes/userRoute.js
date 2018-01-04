
'use strict'

module.exports = function (app) {
    var userController = require('../controllers/userController');
    var transactionController = require('../controllers/transactionController');

    app.use('/transaction', userController.authenticate);
    app.route('/transaction').post(transactionController.addTransaction);

    app.route('/transaction/send/:senderId').get(transactionController.getLatestTransactionsBySenderId);
    app.route('/transaction/receive/:receiverId').get(transactionController.getLatestTransactionsByReceiverId);

    app.route('/user/transaction').get(transactionController.getAllTransactions);
    app.route('/user/login').post(userController.login);
    app.route('/user/sign-up').post(userController.sign_up);
    //app.route('/user/sign-up2').post(userController.sign_up2);
    app.route('/user/sign-up2').post(userController.test);
}