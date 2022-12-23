import {DataTypes, Sequelize} from 'sequelize';
import database from '../config/db-config.js';

export default database.define("user", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    mobile: DataTypes.STRING,
    departament: DataTypes.STRING,
    verificationCode: DataTypes.STRING,
    emailChecked: DataTypes.TINYINT(1),
    cashforceAdm: DataTypes.TINYINT(1)
});