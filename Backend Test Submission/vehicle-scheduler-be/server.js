const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const vehicleRoutes = require("./routes/vehicleRoutes");
const app = express();
app.use(express.json());
app.use("/api/schedule", vehicleRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Vehicle scheduler running on port ${PORT}`);
});