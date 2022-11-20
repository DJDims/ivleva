
const express = require("express")
const app = express();

//----------routers----------
require("./Routes/AuthorRouter")(app);
require("./Routes/BookRouter")(app);
require("./Routes/CategoryRouter")(app);
//----------routers----------

//----------Countrollers----------
const authorController = require("./Controllers/AuthorController");
//----------Countrollers----------



app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'hbs');

app.get("/", (req, res) => {
     res.json({message: "Welcome to library"});
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
});