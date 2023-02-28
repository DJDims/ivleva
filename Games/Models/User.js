const db = require('../database.js');
const Sequelize = require('sequelize');

const Region = require('./Region');
const Role = require('./Role');

const User = db.define('user', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false
	},
	nick: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false
	},
	salt: {
		type: Sequelize.STRING,
		allowNull: false
	},
	wallet: {
		type: Sequelize.FLOAT,
		allowNull: false
	},
	avatar: {
		type: Sequelize.STRING,
		allowNull: false
	},
	region: {
		type: Sequelize.INTEGER,
		allowNull: false,
		references: {
			model: Region,
			key: 'id'
		}
	},
	birthDate: {
		type: Sequelize.DATE,
		allowNull: false
	},
	role: {
		type: Sequelize.INTEGER,
		allowNull: false,
		defaultValue: 3,
		references: {
			model: Role,
			key: 'id'
		}
	}
}, {
	timestamps: false
});

module.exports = User;