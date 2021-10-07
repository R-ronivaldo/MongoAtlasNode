const mongoose = require("mongoose");

const User = mongoose.model("User");

module.exports = {
    async selectById(req, res){
        try {
            const user = await User.findById(req.params.id);
            
            return res.json(`${user.nome} seu saldo é R$${user.saldo}`);
        } catch (err) {
            return res.status(400).send({ error: 'Error loading users'});
        }
    },
    
    async transferById(req, res){
        const idDestino = req.body.idDestino
        const valor = req.body.valor
        const teste = false;
        try {
            const user = await User.findById(req.params.id);
            
            if (user.saldo < valor) {
                return res.status(400).send({ error: 'Valor menor que o saldo disponível'});
            }

            const userDestino = await User.findById(idDestino)
            
            if (!userDestino){
                return res.status(400).send({ error: 'Usuário destino não encontrado'});
            }

            user.saldo = user.saldo-valor;
            userDestino.saldo = userDestino.saldo+valor;

            await User.findByIdAndUpdate(idDestino, userDestino, {new: true});
            await User.findByIdAndUpdate(req.params.id, user, {new: true});

            return res.status(200).json({ msg: `Transferência no valor de R$${valor} para ${userDestino.nome} realizada com sucesso!`});

        } catch (err) {
            return res.status(400).send({ error: 'Error loading users'});
        }
    },
};