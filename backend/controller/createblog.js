// const { ObjectId } = require("mongodb");
const  mongoose = require("mongoose");
const BlogSchema = require("../models/blog");
const UserSchema = require("../models/user");
const jwt = require("jsonwebtoken");
var ObjectId = require('mongodb').ObjectId;

const createblog = async (req, res) => {
    try {
        const { title,subtitle, data, tags } = req.body;
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
            return res.status(404).json("User not found");
        }

        const username = user.username;

        if (!title) {
            return res.status(400).json("Title is needed");
        }

        if (!data) {
            return res.status(400).json("Data is needed");
        }

        const newBlog = await BlogSchema.create({ username, title,subtitle, data, tags });

        const nuser = await UserSchema.findOneAndUpdate(
            { _id: user._id },
            { $push: { blog: newBlog._id } },
            { new: true }
        );

        if (!nuser) {
            return res.status(404).json("User not found");
        }

        return res.status(200).json({
            success: true,
            message: "Successfully created the blog",
            data: newBlog,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json("Some error occurred in createblog");
    }
};

const getallblog = async (req, res) => {
    try {
        const blogdata = await BlogSchema.find();

        if (!blogdata) {
            return res.status(404).json("Some error occurred in getting blog data");
        }

        return res.status(200).json({
            data: blogdata,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json("Some error occurred in getting blog data");
    }
};


const getblog = async (req, res) => {
    try {
        // var id=  new mongoose.Types.ObjectId(_id);
        const {id} = req.params;
        // console.log(id);
        // console.log(typeof(id));

        // Find the blog by its id
        const blog = await BlogSchema.findById(id);

        if (!blog) {
            return res.status(404).json({ success: false, message: "Blog not found" });
        }

        return res.status(200).json({ success: true, data: blog });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: "Error occurred while getting the blog" });
    }
};




const likedblog = async (req, res) => {
    try {
        const { _id } = req.body;
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
            return res.status(404).json("User not found");
        }

        const username = user.username;

        // Check if the user has already liked the blog
        const blog = await BlogSchema.findById(_id);
        
        if (!blog) {
            return res.status(404).json("Blog not found");
        }

        if (blog.likeuser.includes(username)) {
            return res.status(400).json("You have already liked this blog");
        }

        const updatedBlog = await BlogSchema.findByIdAndUpdate(
            _id,
            { 
                $inc: { like: 1 },
                $push: { likeuser: username }
            },
            { new: true },
        );

        const updateUser = await UserSchema.findByIdAndUpdate(
            user._id,
            { $push: { likedblog: _id } },
            { new: true }
        );

        if (!updatedBlog) {
            return res.status(404).json("Blog not found");
        }
        
        return res.status(200).json("Like is successful");
    } catch (err) {
        console.error(err);
        return res.status(500).json("Some error occurred while liking the blog");
    }
};


module.exports = { createblog, getallblog, likedblog, getblog };
