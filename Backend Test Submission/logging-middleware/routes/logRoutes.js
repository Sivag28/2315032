const express = require("express");
const router = express.Router();
const { sendLog } = require("../controller/logController");
router.post("/", sendLog);
module.exports = router;