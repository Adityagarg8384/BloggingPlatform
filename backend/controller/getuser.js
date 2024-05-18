const UserSchema = require("../models/user");

const getuser = async (req, res) => {
    try {
        const username = req.params.username;

        if (!username) {
            return res.status(400).json("Username parameter is missing");
        }

        const data = await UserSchema.findOne({ username: username });

        if (!data) {
            return res.status(404).json("User not found");
        }

        return res.status(200).json({
            success: true,
            data: data,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error in fetching user information");
    }
}

module.exports = { getuser };
