const axios = require("axios");
const fs = require("fs");

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjkyZDJkNzAwMGU1N2EyNzk1ZDgyMzZmYzMyMGViOSIsInN1YiI6IjY0OWY1NWI1ODFkYTM5MDBlYTdiOWEzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fECK1TJtzJ0PMRYjYzh88u_J5I_BhchgfMNt_am0a4A",
  },
};
const getMoviesData = async () => {
  const url =
    "https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&primary_release_year=1990&sort_by=popularity.desc";

  axios
    .get(url, options)
    .then((result) => {
      var data = {};
      data.table = [];
      for (i = 0; i < 100; i++) {
        var obj = {
          info: result.data,
        };

        data.table.push(obj);
      }
      let jsonDAta = JSON.stringify(data.table);

      fs.writeFile("Filme.json", jsonDAta, function (err) {
        if (err) throw err;
      });
    })
    .catch((err) => {});
};
const getAtorData = async () => {
  const url = "https://api.themoviedb.org/3/trending/person/day?language=en-US";

  axios
    .get(url, options)
    .then((result) => {
      var data = {};
      data.table = [];
      for (i = 0; i < 100; i++) {
        var obj = {
          info: result.data,
        };

        data.table.push(obj);
      }
      let jsonDAta = JSON.stringify(data.table);

      fs.writeFile("Pessoa.json", jsonDAta, function (err) {
        if (err) throw err;
      });
    })
    .catch((err) => {});
};
const getElencoData = async () => {
  const url = "https://api.themoviedb.org/3/trending/person/day?language=en-US";

  axios
    .get(url, options)
    .then((result) => {
      var data = {};
      data.table = [];
      for (i = 0; i < 100; i++) {
        var obj = {
          info: result.data,
        };

        data.table.push(obj);
      }
      let jsonDAta = JSON.stringify(data.table);

      fs.writeFile("Elenco.json", jsonDAta, function (err) {
        if (err) throw err;
      });
    })
    .catch((err) => {});
};

module.exports = {
  getMoviesData,
  getAtorData,
  getElencoData,
};
