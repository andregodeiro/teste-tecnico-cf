const {order, provider, buyer} = require('../models');

const findById = async (id) => {
  console.log(id)
    try {
        const orders = await order.findAll({
            where: {userId: id},
            attributes: ['nNf', 'emissionDate', 'orderStatusBuyer', 'value', 'userId'],
            includes: [{
                model: provider,
                as: 'providers',
                attributes: ['name']
            }, {
                model: buyer,
                as: 'buyers',
                attributes: ['name']
            }]
    });
        return orders;
    } catch  (error) {
        console.log(error);
        return resp.status(500).json("Erro no servidor")
    }

    
}



module.exports = {findById};