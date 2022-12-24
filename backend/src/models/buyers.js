import {DataTypes, Sequelize} from 'sequelize';
import database from '../config/db-config';

const Buyer = database.define("buyer", {
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
    phoneNumber: DataTypes.STRING,
    situation: DataTypes.STRING,
    situationDate: DataTypes.STRING,
    cnpjID: DataTypes.INTEGER,
    email: DataTypes.STRING,
    confirm: DataTypes.STRING,

});

    Buyer.associate((models) => {
        Buyer.hasMany(models.order, {
            foreignKey:'buyerId', as: 'orders'
        });
        Buyer.belongsTo(models.cnpj, {
            foreignKey:'buyerId', as: 'cnpj'
        });
        return Buyer;
    });

    export default Buyer;
