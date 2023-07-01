const mysql = require("mysql");
const fs = require("fs");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "40028922",
  database: "filmes",
});

fs.readFile("Filmes.json", (err, data) => {
  if (err) throw err;
  let filmes = JSON.parse(data);

  con.query(
    "INSERT INTO filme (titulo, ano, classificacao, nota, bilheteria, custo) VALUES ('" +
      filmes[0].info.results.original_title +
      "', '" +
      filmes[0].info.results.release_date +
      "', '" +
      filmes[0].info.results.vote_average +
      "', '" +
      filmes[0].info.results.popularity +
      "', '" +
      filmes[0].info.results.popularity +
      "', '" +
      filmes[0].info.results.popularity +
      "', '" +
      "');",
    
    function (err, result) {
      if (err) throw err;
      console.log("data inserted");
    }
  );
});

fs.readFile("Ator.json", (err, data) => {
  if (err) throw err;
  let student = JSON.parse(data);

  con.query(
    "INSERT INTO ator (id, nome, sexo, nasc, pais, altura) VALUES ('" +
      student[0].info.results.id +
      "', '" +
      student[0].info.results.name +
      "', '" +
      student[0].info.results.gender +
      "', '" +
      student[0].info.results.vote_average +
      "', '" +
      student[0].info.results.popularity +
      "', '" +
      student[0].info.results.popularity +
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
    "INSERT INTO elenco (id, nome, sexo, nasc, pais, altura) VALUES ('" +
      student[0].info.results.id +
      "', '" +
      student[0].info.results.name +
      "', '" +
      student[0].info.results.gender +
      "', '" +
      student[0].info.results.vote_average +
      "', '" +
      student[0].info.results.popularity +
      "', '" +
      student[0].info.results.popularity +
      "');",
    function (err, result) {
      if (err) throw err;
      console.log("data inserted");
    }
  );
});

fs.readFile("Diretor.json", (err, data) => {
  if (err) throw err;
  let student = JSON.parse(data);

  con.query(
    "INSERT INTO diretor (id, nome, pais) VALUES ('" +
      student[0].info.id +
      "', '" +
      student[0].info.name +
      "', '" +
      student[0].info.place_of_birth +
      "');",

    function (err, result) {
      if (err) throw err;
      console.log("data inserted");
    }
  );
});
