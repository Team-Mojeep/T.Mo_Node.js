const express = require("express");
const router = express();

const User = require("./user");
const Review = require("./review");

router.use("/user", User);
router.use("/review", Review);

module.exports = router;