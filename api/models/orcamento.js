const mongoose = require("mongoose");

const orcamentoSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  orcamentoName: { type: String, require: true, unique: true },
  totalPrice: { type: String, require: true },
  items: [{}],
});

module.exports = mongoose.model("Orcamento", orcamentoSchema);
