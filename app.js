const express = require("express");
const morgan = require("morgan");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const materialRoute = require("./api/routes/materials");
const orcamentoRoute = require("./api/routes/orcamento");

mongoose.connect(
  "mongodb+srv://Miguel:" +
    process.env.MONGO_ATLAS_PWD +
    "@cluster0.vyrhv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader('Access-Control-Allow-Credentials', true);
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/material", materialRoute);
app.use("/orcamento", orcamentoRoute);

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
