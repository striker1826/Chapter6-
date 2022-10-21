const express = require("express");
const router = express.Router();
const MembersController = require("../controller/members");
const membersController = new MembersController();

router.post("/signup", membersController);
router.post("/login", membersController);
router.patch("/signup", membersController);
router.delete("/signup", membersController);

module.exports = router;
