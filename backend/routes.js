import express from 'express';
import users from './src/controllers/usersController.js'
import orders from './src/controllers/ordersController.js'

const routes = express.Router();

routes.get('/', (res, resp) => {
    return res.json("OK!")
});

routes.get('/users', users.findAll)
routes.get('/orders', orders.findAll)


export { routes as default };