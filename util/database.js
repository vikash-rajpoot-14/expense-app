const Sequelize = require('sequelize');

const sequelize = new Sequelize('expenseapp', 'root', 'Minato@123', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;