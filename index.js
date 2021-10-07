const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

app = express();

//habilitando json na aplicação
app.use(express.json());

//Banco do localhost
//mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });
mongoose.connect('mongodb+srv://rjunior:baseappsecret@cluster0.nkonr.mongodb.net/appdbdistribued?retryWrites=true&w=majority');

//chamar todos os models
requireDir("./src/model");

//chamando as rotas root
app.use("/", require("./src/router"));

//iniciando o server
app.listen(3008);