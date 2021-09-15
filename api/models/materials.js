const mongoose = require("mongoose");

const materialsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  cableName: { type: String, require: true, unique: true },
  type: { type: String, require: true },
  cableType: { type: String, require: true },
  meters: { type: String, require: true },
  price: { type: String, require: true },
  image: { type: String, require: true },
});

module.exports = mongoose.model("Materials", materialsSchema);
