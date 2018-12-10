require("dotenv").config();
const express = require("express"),
  massive = require("massive"),
  { json } = require("body-parser"),
  PORT = 3001;

// controllers
const { getOperators } = require("./controllers/operatorCtrl");

const app = express();
app.use(json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  //   console.log(process.env.CONNECTION_STRING);
  app.set("db", dbInstance);
});

// endpoints
// test endpoint
// app.get("/api/test", (req, res) => {
//   console.log("Bingo!!");
//   //   res.sendStatus(200);
//   res.status(200).send("Yessiiiir");
// });

app.get("/api/operators", getOperators);

app.listen(PORT, () => console.log(`welcome, living at ${PORT}`));
