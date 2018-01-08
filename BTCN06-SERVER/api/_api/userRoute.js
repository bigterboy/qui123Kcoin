var express = require('express');
var r = express.Router();
var userController = require('../controllers/userController');

///////////////////////////////////////////////////////////////////////////////

r.post('/login', userController.login);
r.post('/check-verify', userController.check_verify);
r.post('/sign-up', userController.sign_up);

r.get('/get-user-info', userController.get_info_user);
r.get('/transaction', userController.authenticate);
r.get('/clear-user-info', userController.clear_user_info);



///////////////////////////////////////////////////////////////////////////////
module.exports = r;