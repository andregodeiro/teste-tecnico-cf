import OrderRepository from '../models/orders.js';

function findAll(req, resp) {
    orderRepository.findAll().then((orders) => resp.json(orders));
}

export default findAll;