const express = require("express");

const app = express();
const path = require("path");
const methodOverride = require("method-override");
var $ = require( "jquery" );

const DB = require('./database.js');

const Bundle = require('./Models/Bundle.js');
const Category = require('./Models/Category.js');
const Characteristic = require('./Models/Characteristic.js');
const Company = require('./Models/Company.js');
const Game = require('./Models/Game.js');
const Game_Bundle = require('./Models/Game_Bundle.js');
const Game_Category = require('./Models/Game_Category.js');
const Game_Characteristic = require('./Models/Game_Characteristic.js');
const Game_Company = require('./Models/Game_Company.js');
const Game_Platform = require('./Models/Game_Platform.js');
const Game_Region = require('./Models/Game_Region.js');
const Game_User = require('./Models/Game_User.js');
const Platform = require('./Models/Platform.js');
const Region = require('./Models/Region.js');
const Review = require('./Models/Review.js');
const User = require('./Models/User.js');

DB.sync();

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(methodOverride('_method'));

// app.set("views", "./Views");
// app.set("view engine", "ejs");

app.get("/", (req, res) =>{
    // res.render("index.ejs");
    res.send("Hello, JPTV20!");
});

require("./Routes/CategoryRoutes")(app);
require("./Routes/CompanyRoutes")(app);
require("./Routes/GameRoutes")(app);
require("./Routes/PlatformRoutes")(app);
require("./Routes/ViewRoutes")(app);
require("./Routes/AdminRoutes")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});