const User = require('../models/User');

module.exports = {
    async index(req, res){
        const user = await User.findAll();

        return res.json(user);
    },
    async store(req, res){
        const { name, phone, password, nfc} = req.body;

        const user = await User.create({name, phone, password, nfc});

        return res.json(user);
    }

    
}