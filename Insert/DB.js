const mysql = require("mysql");
const fs = require("fs");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "40028922",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  con.query("CREATE DATABASE filmes");

  con.query("USE filmes");
});

setTimeout(() => {
  const diretor_table =
    "CREATE TABLE diretor (idDiretor INT NOT NULL PRIMARY KEY,nome VARCHAR(45), pais VARCHAR(255));";
  const ator_table =
    "CREATE TABLE ator (idAtor INT NOT NULL PRIMARY KEY, nome VARCHAR(255),sexo VARCHAR(1), nasc DATE , pais VARCHAR(255), altura DECIMAL(3,2))";
  const filme_table =
    "CREATE  TABLE filme ( idFilme INT NOT NULL PRIMARY KEY, idDiretor INT NOT NULL , titulo VARCHAR(45) NOT NULL , ano INT NOT NULL , classificacao VARCHAR(45) NOT NULL, nota DOUBLE NOT NULL, bilheteria DOUBLE NOT NULL , custo DOUBLE NOT NULL , idFilmeAnterior INT, INDEX fk_filme_diretor1_idx (idDiretor ASC) , CONSTRAINT fk_filme_diretor1 FOREIGN KEY (idDiretor ) REFERENCES diretor (idDiretor ), CONSTRAINT fk_filme_filme1 FOREIGN KEY (idFilmeAnterior ) REFERENCES filme (idFilme ));";
  const elenco_table =
    "CREATE  TABLE `elenco` ( `idFilme` INT NOT NULL , `idAtor` INT NOT NULL , PRIMARY KEY (`idFilme`, `idAtor`) , INDEX `fk_elenco_filme_idx` (`idFilme` ASC) , INDEX `fk_elenco_ator_idx` (`idAtor` ASC) , CONSTRAINT `fk_elenco_filme` FOREIGN KEY (`idFilme`) REFERENCES `filme` (`idFilme` ), CONSTRAINT `fk_elenco_ator` FOREIGN KEY (`idAtor` ) REFERENCES `ator` (`idAtor` ));";

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

  con.query(elenco_table, function (err, result) {
    if (err) throw err;
    console.log("Elenco Table created");
  });
}, 1000);

setTimeout(() => {
  fs.readFile("Filmes.json", (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    console.log(student[0].info.results);
  });

  fs.readFile("Ator.json", (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    console.log(student[0].info.results);
  });

  fs.readFile("Elenco.json", (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    console.log(student[0].info.results);
  });

  fs.readFile("Diretor.json", (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    console.log(student[0].info.results);
  });

  // var query = connection.query(
  //   "INSERT INTO scrapped (title,date,month,venue,link) VALUES ('" +
  //     output.title +
  //     "', '" +
  //     output.date +
  //     "', '" +
  //     output.month +
  //     "', '" +
  //     output.venue +
  //     "', '" +
  //     output.link +
  //     "');",
  //   scrape,
  //   function (err, result) {
  //     if (err) throw err;
  //     console.log("data inserted");
  //   }
  // );
}, 7000);

// fs.readFile("Filmes.json", (err, data) => {
//   if (err) throw err;
//   let student = JSON.parse(data);
//   console.log(student[0].info.results);

//   // con.connect(function (err) {
//   //   if (err) throw err;
//   //   console.log("Connected!");
//   //   var sql = "INSERT INTO customers (name, address) VALUES ?";
//   //   var values = [
//   //     ["John", "Highway 71"],
//   //     ["Peter", "Lowstreet 4"],
//   //     ["Amy", "Apple st 652"],
//   //     ["Hannah", "Mountain 21"],
//   //     ["Michael", "Valley 345"],
//   //     ["Sandy", "Ocean blvd 2"],
//   //     ["Betty", "Green Grass 1"],
//   //     ["Richard", "Sky st 331"],
//   //     ["Susan", "One way 98"],
//   //     ["Vicky", "Yellow Garden 2"],
//   //     ["Ben", "Park Lane 38"],
//   //     ["William", "Central st 954"],
//   //     ["Chuck", "Main Road 989"],
//   //     ["Viola", "Sideway 1633"],
//   //   ];
//   //   con.query(sql, [values], function (err, result) {
//   //     if (err) throw err;
//   //     console.log("Number of records inserted: " + result.affectedRows);
//   //   });
//   // });
// });
