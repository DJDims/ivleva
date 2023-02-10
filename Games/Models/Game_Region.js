const db = require('../database.js');
const Sequelize = require('sequelize');

const Game_Region = db.define('game_region', {
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
    regionId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
     timestamps: false
});

module.exports = Game_Region;