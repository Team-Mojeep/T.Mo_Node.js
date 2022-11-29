const express = require("express");
const router = express();

const User = require("./user");
const Review = require("./review");
const Recruitment = require("./recruitment");

router.use("/user", User);
router.use("/review", Review);
router.use("/recruitment", Recruitment);

module.exports = router;