const nodemailer = require('nodemailer');
const isProduction = process.env.NODE_ENV === 'production';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: !isProduction ? 587 : 465,
  secure: isProduction,
  auth: {
    user: 'danieltestshop@gmail.com',
    pass: '23vaskusmes74er4',
  },
});

module.exports = transporter;