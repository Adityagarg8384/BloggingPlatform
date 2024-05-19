const UserSchema = require("../models/user");
const jwt = require("jsonwebtoken");
const getuser = async (req, res) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(400).json("Auth info is missing");
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY || 'your-strong-secret-key');
        
        if (!decode) {
            return res.status(401).send("Unauthorized");
        }
        
        const data = await UserSchema.findById(decode.id).populate("blog").populate("likedblog").populate("saveblog").exec();

        if (!data) {
            return res.status(404).json("User not found");
        }
        data.password = undefined;
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
