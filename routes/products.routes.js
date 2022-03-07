const { Router } = require('express');
const { getAll, getById, addProd, updateProd, deleteProd } = require('../controllers/products.controllers');

const router = Router();

router.get("/products", getAll);
router.get("/products:id", getById);
router.post("/products", updateProd);
router.put("/products:id", addProd);
router.delete("/products:id", deleteProd);

module.exports = router;