const PORT = 8000;
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const sass = require("node-sass");

//midlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Static Files
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(cors());

sass.render({
  file: "./public/scss/main.scss",
  
}, function(err, result) { 
  if(err) {
    console.log(err);
  } else {
    console.log(result);
  }
 });

//DB Connection
const con = require("./config/DB");
con.query("USE filmes");
console.log("Connected to MySQL");

//Routes
const rootRouter = require("./routes/root.router");
const operationsRouter = require("./routes/operation.router");

app.use("/", rootRouter);
app.use("/", operationsRouter);

//Start App
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT} 🚀`);
});
