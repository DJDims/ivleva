const db = require('../database.js');
const{Sequelize} = require('sequelize');

const Book_author = db.define('Book_author', {
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
     AuthorId: {
          type: Sequelize.INTEGER,
          allowNull: false
     }
}, {
     timestamps: false
});

module.exports = Book_author;