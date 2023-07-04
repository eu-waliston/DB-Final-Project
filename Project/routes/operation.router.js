const con = require("../config/DB");
const path = require("path");
const fs = require("fs");

const { createTable, createDB } = require("../oprtations/create");
const {
  getElencoData,
  getMovieData,
  getPersonData,
} = require("../oprtations/getData");
const { insertData } = require("../oprtations/insert");

let info = [];

fs.readFile("./data/infos.json", (err, data) => {
  if (err) {
    console.log({ message: err });
  } else {
    let infos = JSON.parse(data);
    info.push(infos);
  }
});

const express = require("express");
const operationsRouter = express.Router();

operationsRouter.get("/data", async (req, res) => {
  try {
    let random = Math.floor(Math.random() * 10);

    getElencoData(random);
    getMovieData(random);
    getPersonData(random);

    res.status(200).render(path.join(__dirname, "..", "public", "home.ejs"), {
      info: info,
    });
  } catch (error) {
    console.log({ message: error });
  }
});

operationsRouter.get("/create", async (req, res) => {
  try {
    createTable();
    res.status(200).render(path.join(__dirname, "..", "public", "home.ejs"), {
      info: info,
    });
  } catch (error) {
    console.log({ message: error });
  }
});

operationsRouter.get("/createDB", async (req, res) => {
  try {
    createDB();
    res.status(200).render(path.join(__dirname, "..", "public", "home.ejs"), {
      info: info,
    });
  } catch (error) {
    console.log({ message: error });
  }
});

operationsRouter.get("/insert", async (req, res) => {
  try {
    insertData();
    res.status(200).render(path.join(__dirname, "..", "public", "home.ejs"), {
      info: info,
    });
  } catch (error) {
    console.log({ message: error });
  }
});

module.exports = operationsRouter;
