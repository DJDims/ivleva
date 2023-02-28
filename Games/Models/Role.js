const db = require('../database.js');
const Sequelize = require('sequelize');

const Role = db.define('role', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false
	}
}, {
	timestamps: false
});

module.exports = Role;