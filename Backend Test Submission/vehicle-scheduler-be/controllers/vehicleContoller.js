const axios = require("axios");
const {
    findBestTasks
} = require("../services/schedulerService");
const generateSchedule = async (req, res) => {
    try {
        const depotResult = await axios.get(
            process.env.DEPOT_API
        );
        const vehicleResult = await axios.get(
            process.env.VEHICLE_API
        );
        const depots = depotResult.data;
        const vehicles = vehicleResult.data;
        const output = [];
        for (const depot of depots) {
            const result = findBestTasks(
                vehicles,
                depot.mechanicHours
            );
            output.push({
                depotId: depot.id,
                mechanicHours: depot.mechanicHours,
                totalImpact: result.totalImpact,
                selectedTasks: result.tasks
            });
        }
        res.status(200).json(output);

    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
module.exports = {
    generateSchedule
};