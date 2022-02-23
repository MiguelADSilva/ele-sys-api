const mongoose = require("mongoose");

const orcamentoSchema = mongoose.Schema({
  orcamento_id: mongoose.Schema.Types.ObjectId,
  orcamentoName: { type: String, require: true, unique: true },
  lists: [
    {
      orcamento_list_id: { type: String, require: true, unique: true },
      orcamento_list_cableName: { type: String, require: true, unique: true },
      orcamento_list_type: { type: String, require: true },
      orcamento_list_cableType: { type: String, require: true },
      orcamento_list_meters: { type: String, require: true },
      orcamento_list_price: { type: String, require: true },
      orcamento_list_imageURL: { type: String, require: true },
    },
  ],
});

module.exports = mongoose.model("Orcamento", orcamentoSchema);
