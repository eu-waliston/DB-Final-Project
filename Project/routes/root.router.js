const express = require("express");
const path = require("path");
const rootRouter = express.Router();
const fs = require("fs");
let info = []

fs.readFile("./data/infos.json", (err, data) => {
  if(err) {
    console.log({message: err});
  } else {
    let infos = JSON.parse(data);
    info.push(infos)
  }
})

rootRouter.get("/", async (req, res) => {
  try {
    res.status(200).render(path.join(__dirname, "..", "public", "home.ejs"), {
      info: info
    });
  } catch (error) {
    console.log({ message: error });
  }
});

module.exports = rootRouter;
