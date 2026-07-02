const axios = require("axios");

const sendLog = async (req, res) => {
    const { stack, level, packageName, message } = req.body;

    if (!stack || !level || !packageName || !message) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    try {
        const response = await axios.post(
            process.env.LOG_API,
            {
                stack,
                level,
                package: packageName,
                message
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
                    "Content-Type": "application/json"
                }
            }
        );

        return res.status(200).json({
            message: "Log sent successfully",
            response: response.data
        });

    } catch (error) {
        return res.status(500).json({
            message: "Unable to send log",
            error: error.response?.data || error.message
        });
    }
};

module.exports = { sendLog };