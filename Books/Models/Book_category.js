const db = require('../database.js');
const{Sequelize} = require('sequelize');

const Book_category = db.define('Book_category', {
     id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
     },
     BookId: {
          type: Sequelize.INTEGER,
          allowNull: false
     },
     CategoryId: {
          type: Sequelize.INTEGER,
          allowNull: false
     }
}, {
     timestamps: false
});

module.exports = Book_category;