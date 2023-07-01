const axios = require("axios");
const fs = require("fs");

const getAllData = async () => {
  const url =
    "https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&primary_release_year=1990&sort_by=popularity.desc";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjkyZDJkNzAwMGU1N2EyNzk1ZDgyMzZmYzMyMGViOSIsInN1YiI6IjY0OWY1NWI1ODFkYTM5MDBlYTdiOWEzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fECK1TJtzJ0PMRYjYzh88u_J5I_BhchgfMNt_am0a4A",
    },
  };

  axios
    .get(url, options)
    .then((result) => {
      console.log(result.data);

      var data = {};
      data.table = [];
      for (i = 0; i < 100; i++) {
        var obj = {
          info: result.data,
        };

        data.table.push(obj);
      }
      fs.writeFile("input.json", JSON.stringify(data), function (err) {
        if (err) throw err;
        console.log("complete");
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

getAllData();
