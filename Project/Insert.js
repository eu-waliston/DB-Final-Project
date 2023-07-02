const mysql = require("mysql");
const fs = require("fs");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "40028922",
  database: "filmes",
});

fs.readFile("Filme.json", (err, data) => {
  if (err) throw err;
  let filmes = JSON.parse(data);

  "CREATE  TABLE filme ( idFilme INT NOT NULL , idDiretor INT NOT NULL , titulo VARCHAR(45) NOT NULL , ano INT NOT NULL , nota DOUBLE NOT NULL, popularidade INT NOT NULL, PRIMARY KEY (idFilme) ,CONSTRAINT fk_filme_diretor1 FOREIGN KEY (idDiretor ) REFERENCES pessoa (idPessoa ));";
  con.query(
    "INSERT INTO filme (idFilme ,titulo, ano,nota, popularidade) VALUES ('" +
      filmes[0].info.results[0].id +
      "', '" +
      filmes[0].info.results[0].original_title +
      "', '" +
      filmes[0].info.results[0].release_date +
      "', '" +
      filmes[0].info.results[0].vote_average +
      "', '" +
      filmes[0].info.results[0].popularity +
      "');",

    function (err, result) {
      if (err) throw err;
      console.log("data inserted");
    }
  );
});

fs.readFile("Elenco.json", (err, data) => {
  if (err) throw err;
  let student = JSON.parse(data);

  con.query(
    "INSERT INTO ator (idAtor, nome, sexo, nasc, pais, altura) VALUES ('" +
      student[0].info.results[0].id +
      "', '" +
      student[0].info.results[0].name +
      "', '" +
      student[0].info.results[0].gender +
      "', '" +
      student[0].info.results[0].known_for[0].release_date +
      "', '" +
      student[0].info.results[0].popularity +
      "', '" +
      student[0].info.results[0].popularity +
      "');",

    function (err, result) {
      if (err) throw err;
      console.log("data inserted");
    }
  );
});

fs.readFile("Pessoa.json", (err, data) => {
  if (err) throw err;
  let student = JSON.parse(data);

  con.query(
    "INSERT INTO diretor (idDiretor, nome, pais) VALUES ('" +
      student[0].info.results[0].id +
      "', '" +
      student[0].info.results[0].name +
      "', '" +
      student[0].info.results[0].known_for[0].release_date +
      "');",

    function (err, result) {
      if (err) throw err;
      console.log("data inserted");
    }
  );
});
