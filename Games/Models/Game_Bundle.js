const db = require('../database.js');
const Sequelize = require('sequelize');

const Game = require('./Game');
const Bundle = require('./Bundle');

const Game_Bundle = db.define('game_bundle', {
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
    bundleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Bundle,
            key: 'id'
        }
    }
}, {
     timestamps: false
});

module.exports = Game_Bundle;