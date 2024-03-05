const router = require("express").Router();
usersController = require("../controller/users.controller");

router.get("/users", usersController.find);
router.post("/users", usersController.add);
router.get("/users/:id", usersController.getOne);
router.put("/users/:id", usersController.update);
router.delete("/users/:id", usersController.delete);

module.exports = router;
