const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "40028922",
  database: "filmes"
});

module.exports = con;
