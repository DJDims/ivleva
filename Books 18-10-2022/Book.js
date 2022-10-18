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
          allowNull: false
     },
     pageCount: {
          type: Sequelize.INTEGER,
          allowNull: false
     },
     publishedDate: {
          type: Sequelize.DATE,
          allowNull: false
     },
     thumbnailUrl: {
          type: Sequelize.STRING,
          allowNull: false
     },
     shortDescription: {
          type: Sequelize.STRING,
          allowNull: false
     },
     longDescription: {
          type: Sequelize.STRING,
          allowNull: false
     },
     status: {
          type: Sequelize.STRING,
          allowNull: false
     }
}, {
     timestamps: false
});

module.exports = Book;