const mongoose = require("mongoose");
const orcamentoInfo = require("../models/materials");

const orcamentoSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  cableName: 
    { type: String},
  type: 
    { type: String },
  cableType: 
    { type: String},
  meters: 
    { type: String },
  price: 
    { type: String },
  imageURL: 
    { type: String }
});

module.exports = mongoose.model("Orcamento", orcamentoSchema);
