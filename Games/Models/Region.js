const db = require('../database.js');
const Sequelize = require('sequelize');

const Region = db.define('region', {
     id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
     },
     title: {
          type: Sequelize.STRING,
          allowNull: false
     }
     }, {
     timestamps: false
});

module.exports = Region;