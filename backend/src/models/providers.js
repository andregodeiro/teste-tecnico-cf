import {DataTypes, Sequelize} from 'sequelize';
import database from '../config/db-config.js';

const Provider = database.define("provider", {
    name: DataTypes.STRING,
    tradingName: DataTypes.STRING,
    cashforceTax: DataTypes.STRING,
    responsibleName: DataTypes.STRING,
    responsibleEmail: DataTypes.STRING,
    responsiblePosition: DataTypes.STRING,
    responsiblePhone: DataTypes.STRING,
    responsibleMobile: DataTypes.STRING,
    website: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    address: DataTypes.STRING,
    number: DataTypes.STRING,
    complement: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    bank: DataTypes.STRING,
    bankAgency: DataTypes.STRING,
    account: DataTypes.STRING,
    documents: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    situtation: DataTypes.STRING,
    situationDate: DataTypes.STRING,
    cnpjId: {trype: DataTypes.INTEGER, foreignKey: true},
    email: DataTypes.STRING
});

    Provider.associate((models) => {
    Provider.hasMany(models.order, {
        foreignKey:'providerId', as: 'orders'
    });
    Provider.belongsTo(models.cnpj, {
        foreignKey:'providerId', as: 'cnpj'
    });
    return Provider;
});

export default Provider;