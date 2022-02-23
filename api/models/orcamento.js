const mongoose = require("mongoose");

const orcamentoSchema = mongoose.Schema({
  orcamentoId: mongoose.Schema.Types.ObjectId,
  orcamentoName: { type: String, require: true, unique: true },
  material: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Materials",
    require: true,
  },
});

module.exports = mongoose.model("Orcamento", orcamentoSchema);
