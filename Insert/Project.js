const {
  getAtorData,
  getMoviesData,
  getDiretorData,
  getElencoData,
} = require("./getAllData");

//DB Connection
require("./DB.js");

//Get All data end save in a JSON file
getAtorData();

getMoviesData();

getDiretorData();

getElencoData();
