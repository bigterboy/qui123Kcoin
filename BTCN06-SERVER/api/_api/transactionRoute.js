var express = require('express');
var r = express.Router();
var userController = require('../controllers/userController');

r.post('/transaction', userController.login);
r.post('/transaction-verify', userController.check_verify);
r.post('/sign-up', userController.sign_up);

r.get('/transaction-user-info', userController.get_info_user);
r.get('/transaction/test', userController.authenticate);
r.get('/transaction-info', userController.clear_user_info);


module.exports = r;

