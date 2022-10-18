const db = require('./database.js');
const{Sequelize} = require('sequelize');

const Author = db.define('author', {
     id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
     },
     firstname: {
          type: Sequelize.STRING,
          allowNull: false
     },
     surname: {
          type: Sequelize.STRING,
          allowNull: false
     }
}, {
     timestamps: false
});

module.exports = Author;