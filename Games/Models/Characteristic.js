const db = require('../database.js');
const Sequelize = require('sequelize');

const Characteristic = db.define('characteristic', {
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
     type: {
          type: Sequelize.STRING,
          allowNull: false
     }
     }, {
     timestamps: false
});

module.exports = Characteristic;