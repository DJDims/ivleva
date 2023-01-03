const express = require("express");

const app = express();
const path = require("path");

const Category = require('./Models/Category');
const Company = require('./Models/Company');
const Game = require('./Models/Game');
const Platform = require('./Models/Platform');
const Game_Category = require('./Models/Game_Category');
const Game_Company = require('./Models/Game_Company');
const Game_Platform = require('./Models/Game_Platform');

Category.sync();
Company.sync();
Game.sync();
Platform.sync();
Game_Category.sync();
Game_Company.sync();
Game_Platform.sync();

Game.belongsToMany(Category, { through: 'Game_Category' });
Category.belongsToMany(Game, { through: 'Game_Category' });
Game.belongsToMany(Company, { through: 'Game_Company' });
Company.belongsToMany(Game, { through: 'Game_Company' });
Game.belongsToMany(Platform, { through: 'Game_Platform' });
Platform.belongsToMany(Game, { through: 'Game_Platform' });

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.set("views", "./Views");
app.set("view engine", "ejs");

app.get("/", (req, res) =>{
    res.render("index.ejs");
});

require("./Routes/CategoryRoutes")(app);
require("./Routes/CompanyRoutes")(app);
require("./Routes/GameRoutes")(app);
require("./Routes/PlatformRoutes")(app);
require("./Routes/ViewRoutes")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});