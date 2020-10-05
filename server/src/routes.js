const express = require('express');
const UserController = require('./controllers/UserController');
const InputController = require('./controllers/InputController');
const OutputController = require('./controllers/OutputController');

const routes = express.Router();

routes.get('/user', UserController.index);
routes.post('/user', UserController.store);

routes.post('/user/:user_id/input', InputController.store);
routes.post('/user/:user_id/output', OutputController.store);

module.exports = routes;