const db = require("../database");
const config = require("../authConfig");
const User = require("../Models/User");
const Role = require("../Models/Role");

const roleId = 2

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
	if (req.body.role) {
		Role.findOne({
			where: {
				name: req.body.role
			}
		}).then(role => {
			roleId = role.id
		});
	}

	User.create({
		nick: req.body.username,
		password: bcrypt.hashSync(req.body.password, 8),
		role: roleId
	}).then(data => {
		res.send({ message: "User was registered successfully!" });
	}).catch(err => {
		res.status(500).send({ message: err.message });
	});
};

exports.signin = (req, res) => {
	User.findOne({
		where: {
			nick: req.body.username
		}
	}).then(user => {
		if (!user) {
			return res.status(404).send({ message: "User Not found." });
		}

		var passwordIsValid = bcrypt.compareSync(
			req.body.password,
			user.password
		);

		if (!passwordIsValid) {
			return res.status(401).send({
				accessToken: null,
				message: "Invalid Password!"
			});
		}

		var token = jwt.sign({ id: user.id, role: user.role }, config.secret, {
			expiresIn: 86400
		});

		Role.findOne({where: {id: user.role}}).then(role => {
			res.status(200).send({
				id: user.id,
				username: user.username,
				role: role.name,
				accessToken: token
			});
		});


	}).catch(err => {
		res.status(500).send({ message: err.message });
	});
};