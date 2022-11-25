const express = require("express");
const cors = require("cors");

const app = express();

const Book = require('./Models/Book.js');
const Author = require('./Models/Author.js');
const Category = require('./Models/Category.js');
const Book_category = require('./Models/Book_category.js');
const Book_author = require('./Models/Book_author.js');

Book.sync();
Author.sync();
Category.sync();
Book_category.sync();
Book_author.sync();

Book.belongsToMany(Category, { through: 'Book_category' });
Category.belongsToMany(Book, { through: 'Book_category' });
Book.belongsToMany(Author, { through: 'Book_author' });
Author.belongsToMany(Book, { through: 'Book_author' });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.set("views", "./Views");
app.set("view engine", "ejs");

app.get("/", (req, res) =>{
    res.render("index.ejs");
});

require("./Routes/AuthorRouter")(app);
require("./Routes/BookRouter")(app);
require("./Routes/CategoryRouter")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});