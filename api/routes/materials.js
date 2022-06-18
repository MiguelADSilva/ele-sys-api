const express = require("express");
const router = express.Router();

const MaterialsControllers = require("../controllers/materials");

router.post("/createMaterial", MaterialsControllers.createMaterials);
router.get("/getMaterials", MaterialsControllers.get_Materials);
router.delete("/deleteMaterial/:id", MaterialsControllers.deleteMaterials);

module.exports = router;
