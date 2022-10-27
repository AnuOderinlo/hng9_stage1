const express = require("express");
const router = express.Router();
const myController = require("../controller/introController");

router.route("/").get(myController.introController);

module.exports = router;
