const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");
const router = require("./routes/routes");

const app = express();
const port = 2000; // Escolha a porta que desejar

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração para servir arquivos estáticos
app.use("/public", express.static(path.join(__dirname, "public")));

// Rota para servir arquivos HTML
app.use("/", router);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
