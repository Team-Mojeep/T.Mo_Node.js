const express = require("express");
const router = express();
const AuthMiddleware = require("../middleware/token");

const controller = require("../controllers/review")

router.post("/:recruitment_id", AuthMiddleware, controller.createReview);

module.exports = router;