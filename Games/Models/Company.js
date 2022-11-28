const db = require('../database.js');
const Sequelize = require('sequelize');

const Company = db.define('company', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
     timestamps: false
});

module.exports = Company;