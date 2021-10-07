const express = require("express");
const ControllerUser = require("./controller/ControllerUser");

const router = express.Router();

router.get("/consultasaldo/user/:id", ControllerUser.selectById);
router.post("/transferirsaldo/user/:id", ControllerUser.transferById);

module.exports = router;