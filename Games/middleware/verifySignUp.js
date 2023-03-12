const db = require("../database");
const ROLES = require("../Models/Role");
const User = require("../Models/User");

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
	if (req.body.roles) {
		ROLES.findOne({ where: { name: req.body.role.name } }).then(data => {
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

const verifySignUp = {
	checkDuplicateUsername: checkDuplicateUsername,
	checkRoleExisted: checkRoleExisted
}

module.exports = verifySignUp;