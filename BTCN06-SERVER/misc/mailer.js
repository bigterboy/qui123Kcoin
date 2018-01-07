const nodemailer = require('nodemailer');
const config = require('../config/mailer');

const transport = nodemailer.createTransport({
    service: 'Mailgun',
    auth: {
        user: 'postmaster@sandboxa3a4c462d81c416aa75e9b5614f663fd.mailgun.org',
        pass: 'd3521f7976d993cca6d0a8ac00765256'
    },
    tls: {
        rejectUnauthorized: false
    }
});

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