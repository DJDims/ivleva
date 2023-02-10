const db = require('../database.js');
const Sequelize = require('sequelize');

const Game_Characteristic = db.define('game_characteristic', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    gameId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    characteristicId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
     timestamps: false
});

module.exports = Game_Characteristic;