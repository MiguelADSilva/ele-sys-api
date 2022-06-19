const express = require("express");
const router = express.Router();

const OrcamentoControllers = require("../controllers/orcamento");

router.post("/saveOrcamento", OrcamentoControllers.saveOrcamento);
router.get("/getOrcamento", OrcamentoControllers.get_Orcamentos);
router.delete("/deleteOrcamento/:name", OrcamentoControllers.deleteOrcamentos);

module.exports = router;
