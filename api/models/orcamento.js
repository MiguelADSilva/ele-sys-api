const mongoose = require("mongoose");

const orcamentoFullSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  cableName: { type: String, require: true, unique: true },
  type: { type: String, require: true },
  cableType: { type: String, require: true },
  meters: { type: String, require: true },
  price: { type: String, require: true },
  image: { type: String },
});

const orcamentoSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  oramentoName: { type: String, require: true, unique: true },
  orcamentoInfo: [
    { type: mongoose.Schema.Types.ObjectId, ref: "orcamentoFullSchema" },
  ],
});
