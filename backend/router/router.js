const express = require("express");
const { signup, login, logout } = require("../controller/auth");
const { updateName, updateEmailId, updateProfilePic, updateAge } = require("../controller/updateuser");
const { getuser } = require("../controller/getuser");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.put("/updatename/:username", updateName);
router.put("/updateEmailId/:username", updateEmailId);
router.put("/updateProfilePic/:username", updateProfilePic);
router.put("/updateAge/:username", updateAge);

router.get("/getuser/:username", getuser);

module.exports = router;