const db = require('../database.js');
const Sequelize = require('sequelize');

const Game_User = db.define('game_user', {
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
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
     timestamps: false
});

module.exports = Game_User;