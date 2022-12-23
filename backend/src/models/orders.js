import {DataTypes, Sequelize} from 'sequelize';
import database from '../config/db-config.js';

 const Order = database.define("order", {
    orderNfId: DataTypes.STRING,
    orderNumber: DataTypes.STRING,
    orderPath: DataTypes.STRING,
    orderFileName: DataTypes.STRING,
    orderOriginalName: DataTypes.STRING,
    emissionDate: DataTypes.STRING,
    pdfFile: DataTypes.STRING,
    emitedTo: DataTypes.STRING,
    nNf: DataTypes.STRING,
    CTE: DataTypes.STRING,
    value: DataTypes.STRING,
    cnpjId: {type: DataTypes.INTEGER, foreignKey: true},
    buyerId: {type: DataTypes.INTEGER, foreignKey: true},
    providerId: {type: DataTypes.INTEGER, foreignKey: true},
    buyerId: {type: DataTypes.INTEGER, foreignKey: true},
    userId: {type: DataTypes.INTEGER, foreignKey: true},
    orderStatusbuyer: DataTypes.STRING,
    orderStatusProvider: DataTypes.STRING,
    deliveryReceipt: DataTypes.STRING,
    cargoPackingList: DataTypes.STRING,
    deliveryCtrc: DataTypes.STRING,
}
);

Order.associate = (models) => {
    Order.belongsTo(models.buyer, {
        foreignKey: 'buyerId', as: 'buyers',
    });
    Order.belongsTo(models.user, {
        foreignKey: 'userId', as: 'users',
    });
    Order.belongsTo(models.cnpj, {
        foreignKey:'cnpjId', as: 'cnpjs'
    });
    Order.belongsTo(models.provider, {
        foreignKey: 'providerId', as: 'providers'
    });


    return Order;
}

export default Order