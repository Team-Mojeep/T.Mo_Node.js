const express = require("express");
const router = express();
const AuthMiddleware = require("../middleware/token");

const controller = require("../controllers/recruitment");

router.post("/", AuthMiddleware, controller.createRecruitment);
router.patch("/:id", AuthMiddleware, controller.addMember);

module.exports = router;