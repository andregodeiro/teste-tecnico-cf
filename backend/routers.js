const express = require('express');
const orders = require('./src/controllers/ordersController.js');


const routes = express.Router();

routes.get('/', (res, resp) => {
    return res.json("OK!")
});

routes.get('/orders/:id', orders.findById)

module.exports = { routes };