const mongoose = require("mongoose");

const orcamentoSchema = mongoose.Schema({
  orcamento_id: mongoose.Schema.Types.ObjectId,
  orcamentoName: req.body.orcamentoName,
  lists: [
    {
      _id: req.body._id,
      cableName: req.body.cableName,
      type: req.body.type,
      cableType: req.body.cableType,
      meters: req.body.meters,
      price: req.body.price,
      imageURL: req.body.imageURL,
    },
  ],
});

module.exports = mongoose.model("Orcamento", orcamentoSchema);
