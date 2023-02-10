const db = require('../database.js');
const Sequelize = require('sequelize');

const Game_Bundle = db.define('game_bundle', {
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
    bundleId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
     timestamps: false
});

module.exports = Game_Bundle;