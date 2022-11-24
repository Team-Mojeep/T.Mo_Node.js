const express = require("express");
const router = express();

const controller = require("../controllers/user");

router.post("/signup", controller.signup);
router.post("/login", controller.login);

module.exports = router;