const db = require("../database");
const ROLES = require("../Models/Role");
const User = require("../Models/User");
const Region = require("../Models/Region");

checkDuplicateUsername = (req, res, next) => {
	User.findOne({
		where: {
			nick: req.body.username
		}
	}).then(user => {
		if (user) {
			res.status(400).send({
				message: "Failed! Username is already in use!"
			});
			return;
		}
		next();
	});
};

checkRoleExisted = (req, res, next) => {
	if (req.body.role) {
		ROLES.findOne({ where: { name: req.body.role } }).then(data => {
			if (!data) {
				res.status(400).send({
					message: "Failed! Role does not exist = " + req.body.role
				});
				return;
			}
		})
	}
	next();
};

checkRegionExisted = (req, res, next) => {
	if (req.body.region) {
		Region.findOne({ where: { title: req.body.region } }).then(data => {
			if (!data) {
				res.status(400).send({
					message: "Failed! Region does not exist = " + req.body.region
				});
				return;
			}
		})
	}
	next();
}

const verifySignUp = {
	checkDuplicateUsername: checkDuplicateUsername,
	checkRoleExisted: checkRoleExisted,
	checkRegionExisted: checkRegionExisted
}

module.exports = verifySignUp;