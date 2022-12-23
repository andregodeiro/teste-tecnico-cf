import express from 'express';
import orders from './src/controllers/ordersController.js'

const routes = express.Router();

routes.get('/', (res, resp) => {
    return res.json("OK!")
});


routes.get('/orders', orders.findAll)


export { routes as default };