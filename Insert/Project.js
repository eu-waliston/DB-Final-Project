const axios = require("axios");
require("dotenv").config();

const getAllData = async () => {
    const response = axios.get(`https://api.themoviedb.org/3/movie/157336?api_key=${process.env.API_KEY}`)
    
}