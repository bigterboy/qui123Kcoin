
var express = require('express');
var app = express();
app.set('superSecret', 'voduythaosecret');
var User = require('../models/user');
var uuidv4 = require('uuid/v4');
const bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');

var randomstring = require("randomstring");


exports.authenticate = (req, res, next)=>{
    console.log('req', req.query);
    console.log('token body', req.body.token);
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if(token){
        jwt.verify(token, app.get('superSecret'), (err, decoded)=>{
            if(err){
                return res.json({status : 0, message : 'Failed to authenticate token'});
            }
            else{
                req.decoded = decoded;
                next();
            }
        });
    }
    else{
        return res.status(403).send({
            status : 0,
            message : 'No token provided'
        });
    }
}


exports.login = (req, res, next) =>{

    req.checkBody({
        walletId : {
            notEmpty : true,
            errorMessage : "Invalid walletId"
        },
        password : {
            notEmpty : true,
            errorMessage : "Invalid password"
        }
    })





    var errors = req.validationErrors();
    if(errors){
        console.log(errors);
        res.send(errors);
        return;
    }

    var walletId = req.body.walletId;
    var password = req.body.password;
    

    User.findOne({walletId : walletId}, (err, user)=>{
        if(err){
            res.json({status : 0, message : 'error when login', error : err });
            return;
        }
        if(!user){
            res.json({status : 0, message : "WalletId or Password is incorrect"})
            return;
        }
        if(!bcrypt.compareSync(password, user.password)){
            res.json({status : 0, message : "WalletId or Password is incorrect"})
            return;
        }

        if(!user.active)
        {
            res.json({status : 0, message : "You need to verify email first!"})
            return;
        }





        const payload = {
            admin : false
        }
        var token = jwt.sign(payload, app.get('superSecret'),{
            expiresIn : 60*60*24 // expires in 15 minutes
        });  

        res.json({status:1, messsage : 'success', user : user, token : token})
    });
}




exports.sign_up = function(req, res, next){
    //console.log("Vô");
    req.checkBody({
        email : {
            notEmpty : true,
            isEmail : true,
            errorMessage : "Invalid email"
        },
        password : {
            notEmpty : true,
            errorMessage : "Invalid password"
        }
    })
    req.checkBody('rePassword','Passwords do not match.').equals(req.body.password);

    var errors = req.validationErrors();
    if(errors){
        console.log(errors);
        res.json({status : 0, errors : errors, message : errors[0].msg});
        return;
    }

    //console.log("chay nua k?");

    var email = req.body.email;
    var password = req.body.password;

    User.findOne({email : email}, (err, user)=>{
        if(err){
            res.json({status : 0, message : err});
            return;
        }
        if(user){
            res.json({status : 0, message : "Email was used123"})
            return;
        }
        
        var newUser = new User();
        newUser.email = email;
        newUser.password = bcrypt.hashSync(password);
        newUser.balances = 1000;
        newUser.walletId = uuidv4();

        newUser.stokenID = randomstring.generate(36); // tự động phát sinh ngẫu nhiên
        newUser.active = false;
        newUser.save((err, newUser)=>{
            if(err){
                res.json({status : 0, message : err});
                return;
            }
            res.json({status:1, messsage : 'success', user : newUser});
        })
    });
}


exports.sign_up2 = function(req, res, next){
    //console.log("Vô");
    req.checkBody({
        email : {
            notEmpty : true,
            isEmail : true,
            errorMessage : "Invalid email"
        },
        password : {
            notEmpty : true,
            errorMessage : "Invalid password"
        }
    })
    req.checkBody('rePassword','Passwords do not match.').equals(req.body.password);

    var errors = req.validationErrors();
    if(errors){
        console.log(errors);
        res.json({status : 0, errors : errors, message : errors[0].msg});
        return;
    }

    //console.log("chay nua k?");

    var email = req.body.email;
    var password = req.body.password;

    User.findOne({email : email}, (err, user)=>{
        if(err){
            res.json({status : 0, message : err});
            return;
        }
        if(user){
            res.json({status : 0, message : "Email was used123"})
            return;
        }

        var newUser = new User();
        newUser.email = email;
        newUser.password = bcrypt.hashSync(password);
        newUser.balances = 1000;
        newUser.walletId = uuidv4();

        newUser.stokenID = randomstring.generate(36); // tự động phát sinh ngẫu nhiên
        newUser.active = true;
        newUser.save((err, newUser)=>{
            if(err){
                res.json({status : 0, message : err});
                return;
            }
            res.json({status:1, messsage : 'success', user : newUser});
        })
    });
}




exports.test = function(req, res, next){
    console.log("vô test");



    var errors = req.validationErrors();
    if(errors){
        console.log(errors);
        res.json({status : 0, errors : errors, message : errors[0].msg});
        return;
    }

    //console.log("chay nua k?");

    var email = req.body.email;
    //var vertify = req.body.verify;
    //var password = req.body.password;
    //console.log(vertify);
    //console.log(email);
    User.findOne({email : 'bigterboy@yahoo.com.vn'}, (err, user)=>{
        if(err){
            res.json({status : 0, message : err});
            return;
        }
        if(user){
            user.active = true;
            //user.balances = 20000;
            //console.log(user);
            user.save();
            return;
        }
    });
}