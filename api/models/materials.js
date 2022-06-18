const mongoose = require("mongoose");

const materialsSchema = mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  cableName: { type: String, require: true },
  type: { type: String, require: true },
  cableType: { type: String, require: true },
  meters: { type: String, require: true },
  price: { type: String, require: true },
  serie: { type: String, require: false},
  primaryColor: {type: String, require: false},
  color: { type: String, require: false},
  imageURL: { type: String, require: true },
});

module.exports = mongoose.model("Materials", materialsSchema);
