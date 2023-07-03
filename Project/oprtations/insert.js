const con = require("../config/DB");
const fs = require("fs");

function insertData() {
  fs.readFile("./data/Filme.json", (err, data) => {
    if (err) {
      console.log({ message: err });
    } else {
      let filmes = JSON.parse(data);

      con.query(
        "INSERT INTO filme (idFilme,titulo, ano,nota, popularidade) VALUES ('" +
          filmes[0].info.tv_episode_results[0].id +
          "', '" +
          filmes[0].info.tv_episode_results[0].name +
          "', '" +
          filmes[0].info.tv_episode_results[0].air_date +
          "', '" +
          filmes[0].info.tv_season_results[0].vote_average +
          "', '" +
          filmes[0].info.tv_episode_results[0].vote_count +
          "');",

        function (err, result) {
          if (err) throw err;
          console.log("data inserted");
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
        "INSERT INTO elenco (idAtor, idFilme) VALUES ('" +
          elenco[0].info.id +
          "', '" +
          elenco[0].info.id +
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
}

module.exports = {
    insertData
}