const UserSchema = require("../models/user");

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
        const username = req.params.username;
        const newprofilepic = req.body.newprofilepic;

        if (!username) {
            return res.status(400).json("Username is missing");
        }

        if (!newprofilepic) {
            return res.status(400).json("Profile picture is missing");
        }

        const filter = { username: username };
        const update = { profilepic: newprofilepic };

        let doc = await UserSchema.findOneAndUpdate(filter, update, { new: true });

        if (!doc) {
            return res.status(404).json("User not found");
        }

        return res.status(200).json({
            success: true,
            message: "Profile picture updated successfully",
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
