const mongoose = require("mongoose");
import materialsSchema from "./materials";

const orcamentoSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  orcamentoName: { type: String, require: true, unique: true },
  material: [materialsSchema],
});

module.exports = mongoose.model("Orcamento", orcamentoSchema);
