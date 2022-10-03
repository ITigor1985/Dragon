const express = require("express");
const { ctrlWrapper, auth } = require("../../middlewares");
const { dragons: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.getAll));

router.post("/", auth, ctrl.add);

router.delete("/:dragonId", ctrlWrapper(ctrl.removeById));

module.exports = router;
