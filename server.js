const express = require("express");
const cors = require("cors");
const dataJson = require("./data/materials.json");

const app = express();

app.listen(process.env.PORT || 3001, function () {
  console.log("Listening!");
});

app.use(cors());

app.get("/orcamentos", (req, res) => {
  res.send(dataJson);
});
