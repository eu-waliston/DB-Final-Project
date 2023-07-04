const con = require("../config/DB");
const path = require("path");

const { createTable, createDB } = require("../oprtations/create");
const {
  getElencoData,
  getMovieData,
  getPersonData,
} = require("../oprtations/getData");
const { insertData } = require("../oprtations/insert");

const express = require("express");
const operationsRouter = express.Router();

operationsRouter.get("/data", async (req, res) => {
  try {
    let random = Math.floor(Math.random() * 10);

    getElencoData(random);
    getMovieData(random);
    getPersonData(random);

    res.status(200).render(path.join(__dirname, "..", "public", "home.ejs"));
  } catch (error) {
    console.log({ message: error });
  }
});

operationsRouter.get("/create", async (req, res) => {
  try {
    createTable();
    res.status(200).render(path.join(__dirname, "..", "public", "home.ejs"));
  } catch (error) {
    console.log({ message: error });
  }
});

operationsRouter.get("/createDB", async (req, res) => {
  try {
    createDB();
    res.status(200).sendFile(path.join(__dirname, "..", "public", "home.ejs"));
  } catch (error) {
    console.log({ message: error });
  }
});

operationsRouter.get("/insert", async (req, res) => {
  try {
    insertData();
    res.status(200).sendFile(path.join(__dirname, "..", "public", "home.ejs"));
  } catch (error) {
    console.log({ message: error });
  }
});

module.exports = operationsRouter;
