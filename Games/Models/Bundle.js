const db = require('../database.js');
const Sequelize = require('sequelize');

const Bundle = db.define('bundle', {
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
	price: {
		type: Sequelize.FLOAT,
		allowNull: false
	}
}, {
	timestamps: false
});

module.exports = Bundle;