const db = require('../database.js');
const Sequelize = require('sequelize');

const Platform = db.define('platform', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {
     timestamps: false
});

module.exports = Platform;