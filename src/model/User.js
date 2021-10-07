const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    saldo: {
        type: Number,
        required: true,
    }
});

mongoose.model('User', UserSchema);
