const BlogSchema = require("../models/blog");
const UserSchema = require("../models/user");
const jwt = require("jsonwebtoken");

const savedblog = async (req, res) => {
    try {
        const { _id } = req.body; // Extract _id from request body

        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json("Login first");
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY || 'your-strong-secret-key');

        if (!decode) {
            return res.status(401).send("Unauthorized");
        }

        const user = await UserSchema.findById(decode.id);

        if (!user) {
            return res.status(404).json("Error in user");
        }

        // Check if the blog already exists in saveblog array
        if (user.saveblog.includes(_id)) {
            return res.status(400).json("You have already saved this blog");
        }

        const blog = await BlogSchema.findById(_id);

        if(!blog){
            return res.status(400).json("No such blog exists");
        }

        const updateUser = await UserSchema.findByIdAndUpdate(
            user._id,
            { $push: { saveblog: _id } },
            { new: true }
        );

        if (!updateUser) {
            return res.status(404).json("UserSchema cannot be updated");
        }

        return res.status(200).json({
            success: true,
            data: updateUser,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json("Error occurred in savedblog");
    }
};

module.exports = { savedblog };
