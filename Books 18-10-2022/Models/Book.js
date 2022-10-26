const db = require('./database.js');
const{Sequelize} = require('sequelize');

const Book = db.define('book', {
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
     isbn: {
          type: Sequelize.STRING,
          allowNull: true
     },
     pageCount: {
          type: Sequelize.INTEGER,
          allowNull: true
     },
     publishedDate: {
          type: Sequelize.DATE,
          allowNull: true
     },
     thumbnailUrl: {
          type: Sequelize.STRING,
          allowNull: true
     },
     shortDescription: {
          type: Sequelize.STRING,
          allowNull: true
     },
     longDescription: {
          type: Sequelize.STRING,
          allowNull: true
     },
     status: {
          type: Sequelize.STRING,
          allowNull: true
     }
}, {
     timestamps: false
});

module.exports = Book;