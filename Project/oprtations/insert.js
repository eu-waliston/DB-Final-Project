const con = require("../config/DB");
const fs = require("fs");

function insertData() {
  fs.readFile("./data/Filme.json", (err, data) => {
    if (err) {
      console.log({ message: err });
    } else {
      let filmes = JSON.parse(data);

      con.query(
        "INSERT INTO filmes (idFilme,idDiretor,titulo, ano,nota,popularidade) VALUES ('" +
          filmes[0].info.imdb_id +
          "', '" +
          filmes[0].info.id +
          "', '" +
          filmes[0].info.original_title +
          "', '" +
          filmes[0].info.release_date +
          "', '" +
          filmes[0].info.vote_average +
          "', '" +
          filmes[0].info.popularity +
          "');",

        function (err, result) {
          if (err) throw err;
          console.log("data inserted");
        }
      );
    }
  });

  fs.readFile("./data/Pessoa.json", (err, data) => {
    if (err) {
      console.log({ message: err });
    } else {
      let pessoa = JSON.parse(data);
      con.query(
        "INSERT INTO pessoa (idPessoa, nome,sexo,departamento) VALUES ('" +
          pessoa[0].info.id +
          "', '" +
          pessoa[0].info.name +
          "', '" +
          pessoa[0].info.gender +
          "', '" +
          pessoa[0].info.known_for_department +
          "');",

        function (err, result) {
          if (err) throw err;
          console.log("dado inserido");
        }
      );
    }
  });

  fs.readFile("./data/Elenco.json", (err, data) => {
    if (err) {
      console.log({ message: err });
    } else {
      let elenco = JSON.parse(data);
      con.query(
        "INSERT INTO elenco (idAtor, idDiretor, departamento) VALUES ('" +
          elenco[0].info.id +
          "', '" +
          elenco[0].info.id +
          "', '" +
          elenco[0].info.known_for_department +
          "');",

        function (err, result) {
          if (err) throw err;
          console.log("data inserted");
        }
      );
    }
  });
}

module.exports = {
  insertData,
};
