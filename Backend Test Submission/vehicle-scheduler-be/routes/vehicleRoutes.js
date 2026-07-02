const express = require("express");
const router = express.Router();

const vehicleController = require("../controllers/vehicleController");

router.get("/", vehicleController.generateSchedule);

module.exports = router;