const express = require("express");
const cors = require("cors");

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

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

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "GameShop Express API with Swagger",
            version: "0.1.0",
            description:
                "This is a simple CRUD API application made with Express and documented with Swagger",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "LogRocket",
                url: "https://logrocket.com",
                email: "info@email.com",
            },
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: ["./Routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});