const db = require('../database.js');
const Sequelize = require('sequelize');

const Game = require('./Game');
const Characteristic = require('./Characteristic');

const Game_Characteristic = db.define('game_characteristic', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    gameId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Game,
            key: 'id'
        }
    },
    characteristicId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Characteristic,
            key: 'id'
        }
    }
}, {
     timestamps: false
});

module.exports = Game_Characteristic;