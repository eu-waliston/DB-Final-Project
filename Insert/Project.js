const {
  getAtorData,
  getMoviesData,
  getElencoData,
} = require("./getAllData");


//DB Connection
require("./DB.js");

//Get All data end save in a JSON file
getAtorData();

getMoviesData();

getElencoData();
