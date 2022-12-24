import OrderRepository from '../models/orders.js'


async function findAll(req, resp) {
    try {
        const orders = await OrderRepository.findAll();
        resp.json(orders);
    } catch (error) {
        console.log(error);
        return resp.status(500).json("Erro no servidor")
    }
};

export default {findAll};