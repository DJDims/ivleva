const{Sequelize} = require('sequelize');

const sequelize = new Sequelize('jptv20_games', 'root', '', {
     host: 'localhost',
     dialect: 'mysql'
});

module.exports = sequelize;