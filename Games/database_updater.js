
const DB = require('./database');

const Bundle = require('./Models/Bundle');
const Category = require('./Models/Category');
const Characteristic = require('./Models/Characteristic');
const Company = require('./Models/Company');
const Game = require('./Models/Game');
const Game_Bundle = require('./Models/Game_Bundle');
const Game_Category = require('./Models/Game_Category');
const Game_Characteristic = require('./Models/Game_Characteristic');
const Game_Company = require('./Models/Game_Company');
const Game_Platform = require('./Models/Game_Platform');
const Game_Region = require('./Models/Game_Region');
const Game_User = require('./Models/Game_User');
const Platform = require('./Models/Platform');
const Region = require('./Models/Region');
const Review = require('./Models/Review');
const User = require('./Models/User');
const Role = require('./Models/Role');

DB.sync({force: true});