const nodemailer = require("nodemailer");

// Configuração do nodemailer
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "mollie.morar53@ethereal.email",
    pass: "Z1b4jFWFEJ8arD1WkD",
  },
});
