const OrdersService = require('../services/ordersService');

const findById = async (req, resp) => {
    const {id} = req.params;
    try {
        const orders = await OrdersService.findById(id);
        resp.json({payload: orders, message: 'Sucesso'})
    } catch (error) {
        console.log(error);
        return resp.status(500).json({payload: undefined, message:'Erro no servidor'})
    }
}

module.exports = {findById}