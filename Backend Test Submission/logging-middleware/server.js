const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const logRoutes = require("./routes/logRoutes");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/log", logRoutes);
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
    console.log(`Logging service running on port ${PORT}`);
});