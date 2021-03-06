var express = require('express');
var app = express();

app.set('superSecret', 'voduythaosecret');

var User = require('../models/user');
var uuidv4 = require('uuid/v4');
const bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');
var randomstring = require("randomstring");
const nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    service:"Gmail",
    auth: {
        type: 'OAuth2',
        user: 'ninatabala@gmail.com',
        clientId: '239401405943-k2lmkhf8h3nnh2s5dvoddm744amimcvs.apps.googleusercontent.com',
        clientSecret: 'EzFCuGDuphvFMEdWHK4hiL4m',
        refreshToken: '1/5BFcU5kO5A1FQCBdXdb8Ixl5J0Uy36161nqYdunWU8U'
    }
});



const ursa = require('ursa');
const _ = require('lodash');
const crypto = require('crypto');

const HASH_ALGORITHM = 'sha256';



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
};


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
    });


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
        };

        var token = jwt.sign(payload, app.get('superSecret'),{
            expiresIn : 60*60*24 // expires in 15 minutes
        });


        // Lưu Session của user
        req.session.user = user;

        res.json({status:1, messsage : 'success', user : user, token : token})
    });
};


exports.sign_up = function(req, res, next){
    console.log("vo sing up dang ky ne");
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
            res.json({status : 0, message : "Email already exists!"})
            return;
        }
        
        var newUser = new User();
        newUser.email = email;
        newUser.password = bcrypt.hashSync(password);
        newUser.actualBalances = 0;
        newUser.theoreticalBalances = 0;
        newUser.walletId = uuidv4();

        newUser.stokenID = randomstring.generate(36); // tự động phát sinh ngẫu nhiên
        newUser.active = false;


        let privateKey = ursa.generatePrivateKey(1024, 65537);
        let publicKey = privateKey.toPublicPem();

        newUser.privateKey = privateKey.toPrivatePem('hex');
        newUser.publicKey = publicKey.toString('hex');
        newUser.address = hash(publicKey).toString('hex');



        // Compose email
        const html = `Hi there,
          <br/>
          Thank you for registering!
          <br/><br/>
          Please verify your email by typing the following token:
          <br/>
          Verification code : <b>${newUser.stokenID}</b>
          <br/>
          On the following page:
          <a href="http://localhost:3000/vertify">http://localhost:3000/vertify</a>
          <br/><br/>
          Have a pleasant day.`;

        var mailOptions = {
            from: 'KCOIN <ninatabala@gmail.com>',
            to: newUser.email,
            subject: 'PLEASE VERTIFY YOUR EMAIL',
            html: html
        }

        //check xem thử có gửi dc o
        transporter.sendMail(mailOptions, function (err, res) {
            if(err){
                console.log('Error');
            } else {
                console.log('Email Sent');
            }
        })






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


exports.check_verify = function(req, res, next){

    var errors = req.validationErrors();
    if(errors){
        console.log(errors);
        res.json({status : 0, errors : errors, message : errors[0].msg});
        return;
    }

    var verify = req.body.verify;
    console.log('verify: ' + verify);

    User.findOne({stokenID : verify}, (err, user)=>{
        if(err){
            res.json({status : 0, message : err});
            return;
        }

        if(user){
            user.active = true;
            user.save();
            res.json({
                status: 1,
                email: user.email,
                walletId: user.walletId
            });

            return;
        }

        res.json({status : 0, message : 'USER_NOT_FOUND'});
        return;
    });
}


exports.get_info_user = function(req, res, next){
    if(req.session.user){
        const userInfo = req.session.user;
        res.send({
            status: 1,
            message: 'user is signed!',
            email: userInfo.email
        });
    } else{
        res.send({status: 0});
    }
};

exports.clear_user_info = function(req, res, next){
    if(req.session.user){
        req.session.user = undefined;
        res.send({
            status: 1,
            message: 'clear user info success!'
        });
    } else{
        res.send({
            status: 0,
            message: 'not have user info to clear!'
        });
    }
};


let hash = function (data) {
    let hash = crypto.createHash(HASH_ALGORITHM);
    hash.update(data);
    return hash.digest();
};

