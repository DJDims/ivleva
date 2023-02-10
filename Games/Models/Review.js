const db = require('../database.js');
const Sequelize = require('sequelize');

const Review = db.define('review', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    reviewText: {
        type: Sequelize.STRING,
        allowNull: false
    },
    grade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    gameUserId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
     timestamps: false
});

module.exports = Review;