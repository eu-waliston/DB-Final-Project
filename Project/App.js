//DB Connection
require("./DB.js");

const  {  getMoviesData,
    getAtorData,
    getElencoData} = require("./getData.js") 

//Get All data end save in a JSON file
getAtorData();

getMoviesData();

getElencoData();

