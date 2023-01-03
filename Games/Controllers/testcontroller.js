const Game = require("../Models/Game");

exports.test = (req, res) => {
    Game.findAll({order:[["id","DESK"]], limit:1})
    .then(data => {
        res.send(data);
    })
}