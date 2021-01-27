const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
  auth: {
    user: 'lenny.toy65@ethereal.email',
    pass: 'gx5x5QtWknr6DTCfne'
  }
})

module.exports=transporter