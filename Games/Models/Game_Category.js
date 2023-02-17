const db = require('../database.js');
const Sequelize = require('sequelize');

const Game = require('./Game');
const Category = require('./Category');

const Game_Category = db.define('game_category', {
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
    categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Category,
            key: 'id'
        }
    }
}, {
     timestamps: false
});

module.exports = Game_Category;