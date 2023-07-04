const PORT = 8000;
const expres = require("express");
const app = expres();
const cors = require("cors")

//midlewares
app.use(expres.json());
app.use(expres.urlencoded({ extended: true }));

//Static Files
app.use(expres.static("public"));
app.set("view engine", "ejs");
app.use(cors())


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
