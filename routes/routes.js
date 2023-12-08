const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "../views", "login.html"));
});

router.get("/login", (req, res) => {
  return res.sendFile(path.join(__dirname, "../views", "login.html"));
});

router.get("/registro", (req, res) => {
  return res.sendFile(path.join(__dirname, "../views", "registro.html"));
});

router.get("/agenda", (req, res) => {
  return res.sendFile(path.join(__dirname, "../views", "agenda.html"));
});

router.post("/register", (req, res) => {
  return res.json({
    body: req.body
  });
});

router.post("/save", (req, res) => {
  const { Cam_N, Cam_D, blocoN } = req.body;

  // Configuração do e-mail
  const mailOptions = {
    from: "seu_email@gmail.com", // Insira seu e-mail Gmail aqui
    to: "destinatario@gmail.com", // Insira o e-mail do destinatário aqui
    subject: `Novo Projeto: ${Cam_N}`,
    text: `Data: ${Cam_D}\n\n${blocoN}`,
  };

  // Envio do e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ mensagem: "Erro ao enviar e-mail." });
    } else {
      console.log("E-mail enviado: " + info.response);
      res.json({ mensagem: "Projeto salvo e e-mail enviado com sucesso!" });
    }
  });
});

module.exports = router;
