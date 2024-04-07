const router = require("express").Router();
belanjaController = require("../controller/belanja.controller");

router.get("/belanja", belanjaController.find);
router.post("/belanja", belanjaController.add);
router.get("/belanja/:id", belanjaController.getOne);
router.put("/belanja/:id", belanjaController.update);
router.delete("/belanja/:id", belanjaController.delete);

module.exports = router;
