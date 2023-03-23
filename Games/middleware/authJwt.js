const jwt = require("jsonwebtoken");
const config = require("../authConfig.js");
const db = require("../database");
const User = require("../Models/User");
const Role = require("../Models/Role");

exports.verifyToken = (req, res, next) => {
	let token = req.headers["x-access-token"];

	if (!token) {
		return res.status(403).send({
			message: "No token provided!"
		});
	}

	jwt.verify(token, config.secret, (err, decoded) => {
		if (err) {
			return res.status(401).send({
				message: "Unauthorized!"
			});
		}
		req.userId = decoded.id;
		next();
	});
};

exports.isAdmin = (req, res, next) => {
	User.findByPk(req.userId).then(user => {
		Role.findByPk(user.role).then(role =>{
			if (role.name == "ADMIN") {
				next();
				return;
			}
			
			res.status(403).send({
				message: "Require Admin Role!"
			});
			return;
		});
	});
};
