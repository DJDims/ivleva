const db = require('../database.js');
const Sequelize = require('sequelize');

const Game = require('./Game');
const Platform = require('./Platform');

const Game_Platform = db.define('game_platform', {
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
    platformId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Platform,
            key: 'id'
        }
    }
}, {
     timestamps: false
});

module.exports = Game_Platform;