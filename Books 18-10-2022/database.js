const{Sequelize} = require('sequelize');

const sequelize = new Sequelize('jptv20_books', 'root', '', {
     host: 'localhost',
     dialect: 'mysql'
});

module.exports = sequelize;