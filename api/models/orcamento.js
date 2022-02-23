const mongoose = require("mongoose");

const orcamentoSchema = mongoose.Schema({
  orcamento_id: mongoose.Schema.Types.ObjectId,
  orcamentoName: { type: String, require: true, unique: true },
  lists: [
    {
      idmaterial: { type: String, require: true },
      cableNameMaterial: { type: String, require: true, unique: true },
      typeMaterial: { type: String, require: true },
      cableTypeMaterial: { type: String, require: true },
      metersMaterial: { type: String, require: true },
      priceMaterial: { type: String, require: true },
      imageURLMaterial: { type: String, require: true },
    },
  ],
});

module.exports = mongoose.model("Orcamento", orcamentoSchema);
