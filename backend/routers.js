const express = require('express');
const orders = require('./src/controllers/ordersController.js');
const users = require('./src/controllers/usersController.js')

const routers = express.Router();

routers.get('/', (res, resp) => {
    return res.json("OK!")
});

routers.get('/users', users.findAll);
routers.get('/orders/:id', orders.findById);
module.exports = routers;