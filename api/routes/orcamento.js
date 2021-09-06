const express = require("express");
const router = express.Router();

const OrcamentoControllers = require("../controllers/orcamento");

router.post("/saveOrcamento", OrcamentoControllers.saveOrcamento);
router.get("/getOrcamento", OrcamentoControllers.get_Orcamentos);

module.exports = router;
