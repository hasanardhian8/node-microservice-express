const router = require("express").Router();
barangController = require("../controller/barang.controller");

router.get("/barang", barangController.find);
router.post("/barang", barangController.add);
router.get("/barang/:id", barangController.getOne);
router.put("/barang/:id", barangController.update);
router.delete("/barang/:id", barangController.delete);

module.exports = router;
