const { Model, DataTypes } = require('sequelize');

class User extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            phone: DataTypes.STRING,
            password: DataTypes.STRING,
            nfc: DataTypes.STRING,
        },{
            sequelize
        })
        
    }
}

module.exports = User;