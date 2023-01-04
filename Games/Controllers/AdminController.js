const Game = require("../Models/Game");
const Platform = require("../Models/Platform");
const Company = require("../Models/Company");
const Category = require("../Models/Category");
const GameCategory = require("../Models/Game_Category");
const GameCompany = require("../Models/Game_Company");
const GamePlatform = require("../Models/Game_Platform");

exports.fillExampleData = (req, res) => {
    const val = 5;
    for (let i = 1; i <= val; i++) {
        Platform.create({title:"pla"+i});
        Company.create({title:"com"+i});
        Category.create({title:"cat"+i});
    }
    res.redirect("/");
}