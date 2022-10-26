const{Sequelize} = require('sequelize');

const connection = new Sequelize('jptv20_books', 'root', '', {
     host: 'localhost',
     dialect: 'mysql'
});

module.exports = connection;