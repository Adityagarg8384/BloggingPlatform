const CommentSchema = require("../models/comment");
const jwt = require("jsonwebtoken");
const UserSchema = require("../models/user");
const BlogSchema = require("../models/blog");

const createcomment = async (req, res) => {
    try {
        const { _id, message } = req.body;

        if (!message) {
            return res.status(400).json("Comment something");
        }

        const token = req.cookies.token;

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

        const id = user._id;

        const newcomment = await CommentSchema.create({ message, blogid: _id, userid: id });

        if (!newcomment) {
            return res.status(404).json("Error in creating new comment");
        }

        const updateBlog = await BlogSchema.findByIdAndUpdate(
            _id,
            { $push: { comments: newcomment._id } },
            { new: true }
        );

        if (!updateBlog) {
            return res.status(500).json("Error in updating BlogSchema");
        }

        return res.status(200).json({
            success: true,
            body: newcomment,
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json("Error in creating comment");
    }
};

module.exports = { createcomment };
