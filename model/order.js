const Sequelize = require('sequelize');

const sequelize = require('./../util/database');

const Order = sequelize.define('Order', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        autoIncrement: true,
        primaryKey: true
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    dish: {
        type: Sequelize.STRING,
        allowNull: true
    },
    table: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = Order;