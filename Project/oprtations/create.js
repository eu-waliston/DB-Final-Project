const con = require("../config/DB");

function createTable() {
  con.query("USE filmes");

  const pessoa_table =
    "CREATE TABLE pessoa(idPessoa INT PRIMARY KEY AUTO_INCREMENT, nome VARCHAR(255) NOT NULL, sexo INT, departamento VARCHAR(255) )";

  const filme_table =
    "CREATE TABLE filme(idFilme INT PRIMARY KEY AUTO_INCREMENT, idDiretor INT, titulo VARCHAR(255), ano VARCHAR(255), data VARCHAR(255), nota DOUBLE, popularidade INT)";

  const elenco_table =
    "CREATE  TABLE elenco ( idDiretor INT PRIMARY KEY, idAtor INT PRIMARY KEY";

  con.query(pessoa_table, function (err, result) {
    if (err) throw err;
    console.log("Pessoa Table created");
  });

  con.query(filme_table, function (err, result) {
    if (err) throw err;
    console.log("Filme Table created");
  });

  con.query(elenco_table, function (err, result) {
    if (err) throw err;
    console.log("Elenco Table created");
  });
}

function createDB() {
  con.query("drop database if exists filmes;");

  con.query("CREATE DATABASE filmes");

  con.query("USE filmes");
  console.log("DATABASE CREATED");
}

module.exports = {
  createTable,
  createDB,
};
