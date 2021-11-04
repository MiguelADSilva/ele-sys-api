const mongoose = require("mongoose");
const orcamentoInfo = require("../models/materials");

const orcamentoSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  orcamentoInfo: [
    { type: mongoose.Schema.Types.ObjectId, ref: "orcamentoInfo" },
  ],
});

module.exports = mongoose.model("Orcamento", orcamentoSchema);
