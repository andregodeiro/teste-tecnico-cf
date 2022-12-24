const OrdersService = require('../services/ordersService');

const findById = async (req, resp) => {
    const id = req.params;
    try {
        const orders = await OrdersService.findById();
        resp.json(orders)
    } catch (error) {
        console.log(error);
        return resp.status(500).json("Erro no servidor")
    }
}

module.exports = {findById}