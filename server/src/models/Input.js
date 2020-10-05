const { Model, DataTypes } = require('sequelize');

class Input extends Model {
  static init(sequelize) {
    super.init({
      date_time: DataTypes.DATE,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

module.exports = Input;