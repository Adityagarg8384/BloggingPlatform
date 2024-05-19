const UserSchema = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
    try {
        const { username, emailid, password } = req.body;

        if (!username) {
            return res.status(400).json("Please provide a valid username");
        }
        if (!emailid) {
            return res.status(400).json("Please provide a valid emailid");
        }
        if (!password) {
            return res.status(400).json("Please provide a valid password");
        }

        const existingUser = await UserSchema.findOne({ username});

        if (existingUser) {
            return res.status(400).json('User already exists with this username or email');
        }

        const encryptedPassword = await bcrypt.hash(password, 8);

        const user = await UserSchema.create({
            username,
            emailid,
            password: encryptedPassword,
        });

        const token = jwt.sign(
            { id: user._id, username },
            'your-strong-secret-key', // Use a strong secret key
            {
                expiresIn: "24h",
            }
        );

        const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true,
            secure: false,
            domain: "localhost",
        };

        res.cookie("token", token, options);

        user.password = undefined;

        return res.status(200).json({
            success: true,
            token,
            user,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: "Error in signup",
        });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username) {
            return res.status(400).json("Please provide a valid username");
        }
        if (!password) {
            return res.status(400).json("Please provide a valid password");
        }

        const user = await UserSchema.findOne({ username });

        if (!user) {
            return res.status(401).json("No such user exists");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json("Password is incorrect");
        }

        const token = jwt.sign(
            { id: user._id, username },
            'your-strong-secret-key', // Use a strong secret key
            {
                expiresIn: "24h",
            }
        );

        const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true,
            secure: false,
            domain: "localhost",
        };

        res.cookie("token", token, options);

        user.password = undefined;

        return res.status(200).json({
            success: true,
            token,
            user,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

const logout = async (req, res) => {
    try {
        res.clearCookie("token");
        return res.status(200).json({ message: "Logged out successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: "Some error occurred while logging out",
        });
    }
};

module.exports = { signup, login, logout };