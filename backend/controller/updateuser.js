const UserSchema = require("../models/user");
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '../.env') });
const cloudinary= require("cloudinary").v2;


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
});

const updateName = async (req, res) => {
    try {
        const username = req.params.username;
        const newname = req.body.newname;

        if (!username) {
            return res.status(400).json("Username is missing");
        }

        if (!newname) {
            return res.status(400).json("New name is missing");
        }

        console.log(newname);
        console.log(username)
        typeof(newname);
        typeof(username);
        const filter = { username: username };
        const update = { username: newname };

        let doc = await UserSchema.findOneAndUpdate(filter, update, { new: true });

        if (!doc) {
            return res.status(404).json("User not found");
        }

        return res.status(200).json({
            success: true,
            message: "Name updated successfully",
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error in updating name");
    }
};

const updateEmailId = async (req, res) => {
    try {
        const username = req.params.username;
        const newemailid = req.body.newemailid;

        if (!username) {
            return res.status(400).json("Username is missing");
        }

        if (!newemailid) {
            return res.status(400).json("New email ID is missing");
        }

        const filter = { username: username };
        const update = { emailid: newemailid };

        let doc = await UserSchema.findOneAndUpdate(filter, update, { new: true });

        if (!doc) {
            return res.status(404).json("User not found");
        }

        return res.status(200).json({
            success: true,
            message: "Email ID updated successfully",
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error in updating email ID");
    }
};

const updateProfilePic = async (req, res) => {
    try {
        
        // const username = req.params.username;
        // const newprofilepic = req.body.newprofilepic;

        // if (!username) {
        //     return res.status(400).json("Username is missing");
        // }

        // if (!newprofilepic) {
        //     return res.status(400).json("Profile picture is missing");
        // }

        // const filter = { username: username };
        // const update = { profilepic: newprofilepic };

        // let doc = await UserSchema.findOneAndUpdate(filter, update, { new: true });

        // if (!doc) {
        //     return res.status(404).json("User not found");
        // }

        // return res.status(200).json({
        //     success: true,
        //     message: "Profile picture updated successfully",
        // });

        const files= req.files.photo;

        if(!files){
            return res.status(404).json("No file found");
        }
        var url=""
        await cloudinary.uploader.upload(files.tempFilePath, (err, result)=>{
            console.log(result);
            console.log(result.url);
            url= result.url;
            console.log(url);
            console.log("Hello world");
            console.log(err);
        })
        console.log(url);
        if(!url){
            return res.status(404).json("Doesn't get url from backend");
        }

        const username = req.params.username;
        console.log(username);

        const filter = { username: username };
        const update = { profilepic: url };
        let doc;
        try{
            doc = await UserSchema.findOneAndUpdate(filter, update, { new: true });
        }
        catch(err){
            console.log(err);
        }
        console.log(doc);

        if(!doc){
            return res.status(404).json("error in updateing the schema");
        }

        return res.status(200).json({
            success:true,
            message:"Data has been updated successfully",
            data:doc,
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json("Error in updating profile picture");
    }
};

const updateAge = async (req, res) => {
    try {
        const username = req.params.username;
        const newage = req.body.newage;

        if (!username) {
            return res.status(400).json("Username is missing");
        }
       

        if (!newage) {
            return res.status(400).json("Age is missing");
        }

        const filter = { username: username };
        const update = { age: newage };
        let doc = await UserSchema.findOneAndUpdate(filter, update, { new: true });

        if (!doc) {
            return res.status(404).json("User not found");
        }

        return res.status(200).json({
            success: true,
            message: "Age updated successfully",
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json("Error in updating age");
    }
};

module.exports = { updateName, updateEmailId, updateProfilePic, updateAge };
