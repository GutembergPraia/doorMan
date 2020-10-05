const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');

const Input = require('../models/Input');
const Output = require('../models/Output');

const connection = new Sequelize(dbConfig);

User.init(connection);
Input.init(connection);
Output.init(connection);

Input.associate(connection.models);
Output.associate(connection.models);

module.exports = connection;