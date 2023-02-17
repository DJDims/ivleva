const db = require('../database.js');
const Sequelize = require('sequelize');

const Game = require('./Game');
const Region = require('./Region');

const Game_Region = db.define('game_region', {
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
    regionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Region,
            key: 'id'
        }
    }
}, {
     timestamps: false
});

module.exports = Game_Region;