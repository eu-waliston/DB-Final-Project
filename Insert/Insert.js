// const mysql = require("mysql");
// const fs = require("fs");

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "40028922",
// });

// setTimeout(() => {
//   fs.readFile("Filmes.json", (err, data) => {
//     if (err) throw err;
//     let student = JSON.parse(data);
//     console.log(student[0].info.results);
//     con.query("")
//   });

//   fs.readFile("Ator.json", (err, data) => {
//     if (err) throw err;
//     let student = JSON.parse(data);
//     console.log(student[0].info.results);

//     con.query("")
//   });

//   fs.readFile("Elenco.json", (err, data) => {
//     if (err) throw err;
//     let student = JSON.parse(data);
//     console.log(student[0].info.results);

//     con.query("")
//   });

//   fs.readFile("Diretor.json", (err, data) => {
//     if (err) throw err;
//     let student = JSON.parse(data);
//     console.log(student[0].info.results);

//     con.query("INSERT INTO")
//   });

//   // var query = connection.query(
//   //   "INSERT INTO scrapped (title,date,month,venue,link) VALUES ('" +
//   //     output.title +
//   //     "', '" +
//   //     output.date +
//   //     "', '" +
//   //     output.month +
//   //     "', '" +
//   //     output.venue +
//   //     "', '" +
//   //     output.link +
//   //     "');",
//   //   scrape,
//   //   function (err, result) {
//   //     if (err) throw err;
//   //     console.log("data inserted");
//   //   }
//   // );
// }, 7000);

// // fs.readFile("Filmes.json", (err, data) => {
// //   if (err) throw err;
// //   let student = JSON.parse(data);
// //   console.log(student[0].info.results);

// //   // con.connect(function (err) {
// //   //   if (err) throw err;
// //   //   console.log("Connected!");
// //   //   var sql = "INSERT INTO customers (name, address) VALUES ?";
// //   //   var values = [
// //   //     ["John", "Highway 71"],
// //   //     ["Peter", "Lowstreet 4"],
// //   //     ["Amy", "Apple st 652"],
// //   //     ["Hannah", "Mountain 21"],
// //   //     ["Michael", "Valley 345"],
// //   //     ["Sandy", "Ocean blvd 2"],
// //   //     ["Betty", "Green Grass 1"],
// //   //     ["Richard", "Sky st 331"],
// //   //     ["Susan", "One way 98"],
// //   //     ["Vicky", "Yellow Garden 2"],
// //   //     ["Ben", "Park Lane 38"],
// //   //     ["William", "Central st 954"],
// //   //     ["Chuck", "Main Road 989"],
// //   //     ["Viola", "Sideway 1633"],
// //   //   ];
// //   //   con.query(sql, [values], function (err, result) {
// //   //     if (err) throw err;
// //   //     console.log("Number of records inserted: " + result.affectedRows);
// //   //   });
// //   // });
// // });
