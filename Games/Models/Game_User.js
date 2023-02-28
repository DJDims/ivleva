const db = require('../database.js');
const Sequelize = require('sequelize');

const Game = require('./Game');
const User = require('./User');

const Game_User = db.define('game_user', {
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
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    purchaseDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    }
}, {
     timestamps: false,
     indexes: [
        {
            name: 'uniqueq',
            fields: ['gameId', 'userId'],
            unique: true
        }
    ]
}
);

module.exports = Game_User;