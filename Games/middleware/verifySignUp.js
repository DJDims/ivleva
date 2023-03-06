const db = require("../database");
const ROLES = require("../Models/Role");
const User = require("../Models/User");

exports.checkDuplicateUsernameOrEmail = (req, res, next) => {
  User.findOne({
    where: {
      username: req.body.username
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

exports.checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      ROLES.findOne({where: {name: req.body.roles.name}}).then(data =>{
        if(!data) {
          res.status(400).send({
                message: "Failed! Role does not exist = " + req.body.roles[i]
              });
              return;
        }
    })
    }
  } else {
    res.status(200).send({
      message: "OKEK"
    });
    return;
  }
  
  next();
};