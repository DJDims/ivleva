const express = require("express");
const cors = require("cors");

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

const app = express();

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

DB.sync();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello, JPTV20!");
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

require("./Routes/authRoutes")(app);
require("./Routes/BundleRoutes")(app);
require("./Routes/CategoryRoutes")(app);
require("./Routes/CharacteristicRoutes")(app);
require("./Routes/CompanyRoutes")(app);
require("./Routes/GameRoutes")(app);
require("./Routes/PlatformRoutes")(app);
require("./Routes/RegionRoutes")(app);
require("./Routes/ReviewRoutes")(app);
require("./Routes/RoleRoutes")(app);
require("./Routes/UserRoutes")(app);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});