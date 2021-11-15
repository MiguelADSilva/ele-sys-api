const mongoose = require("mongoose");
const orcamentoInfo = require("../models/materials");

const orcamentoSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  cableName: [
    { type: String, ref: orcamentoInfo },
  ],
  type: [
    { type: String, ref: orcamentoInfo },
  ],
  cableType: [
    { type: String, ref: orcamentoInfo }
  ],
  meters: [
    { type: String, ref: orcamentoInfo }
  ],
  price: [
    { type: String, ref: orcamentoInfo }
  ],
  imageURL: [
    { type: String, ref: orcamentoInfo }
  ],
});

module.exports = mongoose.model("Orcamento", orcamentoSchema);
