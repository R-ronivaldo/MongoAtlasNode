const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

app = express();

//habilitando json na aplicação
app.use(express.json());

//Banco do localhost
//mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

//chamar todos os models
requireDir("./src/model");

//chamando as rotas root
app.use("/", (req, res) => {
    const User = mongoose.model("Product");
    res.send('Olá');
});

//iniciando o server
app.listen(3008);