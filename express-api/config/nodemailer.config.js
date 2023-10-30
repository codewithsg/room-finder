const nodeMailer = require('nodemailer');
module.exports = nodeMailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'process.env.user',
        pass: 'process.env.pass'
    }
});