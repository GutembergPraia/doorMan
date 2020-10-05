const User = require('../models/User');
const Output = require('../models/Output');

module.exports = {
    async index(req, res) {
        const { user_id } = req.params;
    
        const user = await User.findByPk(client_id, {
          include: { association: 'input' }
        });
        
        return res.json(client);
        
        //return res.json(client.addresses);
    },
    async store(req, res) {
        const { user_id } = req.params;

        
        const user = await User.findByPk(user_id);
        
        if (!user) {
          return res.status(400).json({ error: 'User not found' });
        }

        const output = await Output.create({
          user_id
        });
    
        return res.json(output);
    }
}