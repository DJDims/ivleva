const express = require("express");
const cors = require("cors");

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

const app = express();

const DB = require('./database');

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
// require("./Routes/UserRoutes")(app);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});