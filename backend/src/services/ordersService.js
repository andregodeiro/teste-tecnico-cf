import {order, provider, buyer, cnpj} from '../models';

const findById = async (id) => {
    try {
        const orders = await order.findAll({
            where: {userId: 'id'},
            attributes: ['nNf', 'emissionDate', 'orderStatusBuyer', 'value'],
            includes: [{
                model: provider,
                attributes: ['name']
            }, {
                model: buyer,
                attributes: ['name']
            }]
    });
        return orders;
    } catch  (error) {
        console.log(error);
        return resp.status(500).json("Erro no servidor")
    }

    
}

export default findById;