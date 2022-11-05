const express = require("express");
const router = express.Router();
const myController = require("../controller/introController");

router.route("/").get(myController.introController);
router.route("/evaluate").post(myController.evaluate);

module.exports = router;
