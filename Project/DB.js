const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "40028922",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected to MySQL");

  con.query("drop database if exists filmes;");

  con.query("CREATE DATABASE filmes");

  con.query("USE filmes");
});

setTimeout(() => {
  const diretor_table =
    "CREATE TABLE diretor (idDiretor INT  PRIMARY KEY AUTO_INCREMENT,nome VARCHAR(45), pais VARCHAR(255));";
  const ator_table =
    "CREATE TABLE ator (idAtor INT  PRIMARY KEY AUTO_INCREMENT, nome VARCHAR(255),sexo VARCHAR(1), nasc VARCHAR(255) , pais VARCHAR(255), altura VARCHAR(255))";
  const filme_table =
    "CREATE  TABLE filme ( idFilme INT  PRIMARY KEY AUTO_INCREMENT, idDiretor INT  , titulo VARCHAR(45)  , ano VARCHAR(45)  , classificacao VARCHAR(45) , nota DOUBLE , bilheteria DOUBLE  , custo VARCHAR(45)  , idFilmeAnterior INT, INDEX fk_filme_diretor1_idx (idDiretor ASC) , CONSTRAINT fk_filme_diretor1 FOREIGN KEY (idDiretor ) REFERENCES diretor (idDiretor ), CONSTRAINT fk_filme_filme1 FOREIGN KEY (idFilmeAnterior ) REFERENCES filme (idFilme ));";

  con.query(diretor_table, function (err, result) {
    if (err) throw err;
    console.log("Diretor Table created");
  });

  con.query(ator_table, function (err, result) {
    if (err) throw err;
    console.log("Ator Table created");
  });

  con.query(filme_table, function (err, result) {
    if (err) throw err;
    console.log("Filme Table created");
  });
}, 1000);

setTimeout(() => {
  require("./Insert.js");
}, 9000);
