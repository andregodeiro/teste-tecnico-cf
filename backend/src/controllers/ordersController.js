import ordersService from '../services/ordersService';

const findById = async (req, resp) => {
    const id = req.params;
    try {
        const orders = await ordersService.findById();
        resp.json(orders)
    } catch (error) {
        console.log(error);
        return resp.status(500).json("Erro no servidor")
    }
}

export default {findById}