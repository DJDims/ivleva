const db = require('../database.js');
const Sequelize = require('sequelize');

const Game = require('./Game');
const Company = require('./Platform');

const Game_Company = db.define('game_company', {
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
    companyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Company,
            key: 'id'
        }
    }
}, {
     timestamps: false
});

module.exports = Game_Company;