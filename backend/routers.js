import express from 'express';
import orders from './src/controllers/ordersController.js';
import users from './src/controllers/usersController.js';

const routes = express.Router();

routes.get('/', (res, resp) => {
    return res.json("OK!")
});

routes.get('/orders', orders.findAll)
routes.get('/users', users.findAll)


export { routes as default };