const nodemailer = require('nodemailer');

const SendEmail = async (options) =>{

 const transporter = nodemailer.createTransport({
  host: process.env.SMPT_HOST,
  port: process.env.SMPT_PORT,
  auth: {
    user: process.env.SMPT_EMAIL,
    pass: process.env.SMPT_PASSWORD
  }
});
const message = {
    from: `${process.env.SMPT_USER_NAME}, <${process.env.SMPT_USER_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    text: options.message
}

 await transporter.sendMail(message)
}

module.exports = SendEmail