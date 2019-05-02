var mysql = require("mysql");
var connection;

var pwd = require("./pwd.js");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        database: "burgers_db",
        host: "localhost",
        port: 3306,
        user: "mike4747",
        password: pwd
    });
}

connection.connect();
module.exports = connection;