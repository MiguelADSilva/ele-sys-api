const mongoose = require("mongoose");

const orcamentoSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  orcamentoName: { type: String, require: true, unique: true },
  material: [
    {
      cable_id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
      },
      cableName: { type: String, require: true, unique: true },
      type: { type: String, require: true },
      cableType: { type: String, require: true },
      meters: { type: String, require: true },
      price: { type: String, require: true },
      imageURL: { type: String, require: true },
    },
  ],
});

module.exports = mongoose.model("Orcamento", orcamentoSchema);
