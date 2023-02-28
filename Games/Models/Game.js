const db = require('../database.js');
const Sequelize = require('sequelize');

const Company = require('./Company');

const Game = db.define('game', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    publishYear: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    publisher: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Company,
            key: 'id'
        }
    },
    poster: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING(1000),
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    ageLimit: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
     timestamps: false
});

module.exports = Game;