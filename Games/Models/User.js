const db = require('../database.js');
const Sequelize = require('sequelize');

const User = db.define('user', {
     id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
     },
     nick: {
          type: Sequelize.STRING,
          allowNull: false
     },
     password: {
          type: Sequelize.STRING,
          allowNull: false
     },
     salt: {
          type: Sequelize.STRING,
          allowNull: false
     },
     wallet: {
          type: Sequelize.FLOAT,
          allowNull: false
     },
     avatar: {
          type: Sequelize.STRING,
          allowNull: false
     },
     region: {
          type: Sequelize.INTEGER,
          allowNull: false
     },
     birthDate: {
          type: Sequelize.DATE,
          allowNull: false
     },
}, {
     timestamps: false
});

module.exports = User;