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

const getMovieData = (id) => {
  let URL = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  axios
    .get(URL, options)
    .then((result) => {
      let data = {};
      data.table = [];
      for (let i = 0; i <= 1; i++) {
        let obj = { info: result.data };
        data.table.push(obj);
      }
      let resultData = JSON.stringify(data.table);
      fs.writeFile("./data/Filme.json", resultData, (err) => {
        if (err) throw err;
      });
    })
    .catch((err) => {});
};

const getPersonData = (id) => {
  let URL = `https://api.themoviedb.org/3/person/${id}?language=en-US`;

  axios
    .get(URL, options)
    .then((result) => {
      let data = {};
      data.table = [];
      for (let i = 0; i <= 1; i++) {
        let obj = { info: result.data };
        data.table.push(obj);
      }
      let resultData = JSON.stringify(data.table);

      fs.writeFile("./data/Pessoa.json", resultData, (err) => {
        if (err) throw err;
      });
    })
    .catch((err) => {});
};

const getElencoData = (id) => {
  let URL = `https://api.themoviedb.org/3/person/${id}?language=en-US`;

  axios
    .get(URL, options)
    .then((result) => {
      let data = {};
      data.table = [];
      for (i = 0; i <= 1; i++) {
        let obj = {
          info: result.data,
        };

        data.table.push(obj);
      }
      let jsonDAta = JSON.stringify(data.table);

      fs.writeFile("./data/Elenco.json", jsonDAta, function (err) {
        if (err) throw err;
      });
    })
    .catch((err) => {});
};

module.exports = {
  getMovieData,
  getPersonData,
  getElencoData,
};
