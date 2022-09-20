const dbConfig = require('database.js');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database,
})

connection.connect(error => {
    if (error) throw error;
    console.log("Successfull")
})

module.exports = connection