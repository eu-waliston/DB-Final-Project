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
  const pessoa_table =
    "CREATE  TABLE pessoa ( idPessoa INT NOT NULL , nome VARCHAR(255) NOT NULL , sexo INT NULL , departamento VARCHAR(255) NULL , PRIMARY KEY (idPessoa));";

  const filme_table =
    "CREATE  TABLE filme ( idFilme INT NOT NULL , idDiretor INT NOT NULL , titulo VARCHAR(45) NOT NULL , ano INT NOT NULL , nota DOUBLE NOT NULL, popularidade INT NOT NULL, PRIMARY KEY (idFilme) ,CONSTRAINT fk_filme_diretor1 FOREIGN KEY (idDiretor ) REFERENCES pessoa (idPessoa ));";

  const elenco_table =
    "CREATE  TABLE elenco ( idFilme INT NOT NULL , idAtor INT NOT NULL , PRIMARY KEY (idFilme, idAtor) , CONSTRAINT fk_elenco_filme FOREIGN KEY (idFilme ) REFERENCES filme (idFilme ), CONSTRAINT fk_elenco_ator FOREIGN KEY (idAtor ) REFERENCES pessoa (idPessoa ));";

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
}, 1000);

// setTimeout(() => {
//   require("./Insert.js");
// }, 9000);
