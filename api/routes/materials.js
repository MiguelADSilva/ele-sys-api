const express = require("express");
const router = express.Router();

const MaterialsControllers = require("../controllers/materials");
const OrcamentoControllers = require("../controllers/orcamento");

router.post("/createMaterial", MaterialsControllers.createMaterials);
router.get("/getMaterials", MaterialsControllers.get_Materials);
router.post("/saveOrcamento", OrcamentoControllers.saveOrcamento);

module.exports = router;
