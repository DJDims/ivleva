const db = require('../database.js');
const Sequelize = require('sequelize');

const Game = db.define('game', {
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
    publishYear: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    poster: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
     timestamps: false
});

module.exports = Game;