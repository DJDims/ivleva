const express = require("express");

const app = express();

const Category = require('./Models/Category');
const Company = require('./Models/Company');
const Game = require('./Models/Game');
const Game_Category = require('./Models/Game_Category');
const Game_Company = require('./Models/Game_Company');

Category.sync();
Company.sync();
Game.sync();
Game_Category.sync();
Game_Company.sync();

Game.belongsToMany(Category, { through: 'Game_Category' });
Category.belongsToMany(Game, { through: 'Game_Category' });
Game.belongsToMany(Company, { through: 'Game_Company' });
Company.belongsToMany(Game, { through: 'Game_Company' });

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/Public'));

app.set("views", "./Views");
app.set("view engine", "ejs");

app.get("/", (req, res) =>{
    res.render("index.ejs");
});

require("./Routes/CategoryRoutes")(app);
require("./Routes/CompanyRoutes")(app);
require("./Routes/GameRoutes")(app);
require("./Routes/ViewRoutes")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});