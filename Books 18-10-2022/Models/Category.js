const db = require('../database.js');
const{Sequelize} = require('sequelize');

const Category = db.define('category', {
     id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
     },
     categoryName: {
          type: Sequelize.STRING,
          allowNull: false
     }
}, {
     timestamps: false
});

module.exports = Category;