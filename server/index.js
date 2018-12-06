require("dotenv").config();
const express = require("express"),
  massive = require("massive"),
  { json } = require("body-parser"),
  PORT = 3001;

const app = express();
app.use(json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  //   console.log(process.env.CONNECTION_STRING);
  app.set("db", dbInstance);
});

app.listen(PORT, () => console.log(`welcome, living at ${PORT}`));
