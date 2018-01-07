const nodemailer = require('nodemailer');
const config = require('../config/mailer');

// const transport = nodemailer.createTransport({
//     service: 'Mailgun',
//     auth: {
//         //user: 'postmaster@sandboxa3a4c462d81c416aa75e9b5614f663fd.mailgun.org',
//         //pass: 'd3521f7976d993cca6d0a8ac00765256'
//         user: 'postmaster@sandbox86a2fd70b77446898b17d58141496488.mailgun.org',
//         pass: '32f55d0f0ffa43394b6a88186395cce1'
//     },
//     tls: {
//         rejectUnauthorized: false
//     }
// });

module.exports = {
    sendEmail(from, to, subject, html) {
        return new Promise((resolve, reject) => {
            transport.sendMail({ from, subject, to, html }, (err, info) => {
                if (err) reject(err);
                resolve(info);
            });
        });
    }
}