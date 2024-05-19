const express = require("express");
const { signup, login, logout } = require("../controller/auth");
const { updateName, updateEmailId, updateProfilePic, updateAge } = require("../controller/updateuser");
const { getuser } = require("../controller/getuser");
const {createblog,getallblog, likedblog, getblog} = require("../controller/createblog");
const {savedblog}= require("../controller/savedblog");
const {createcomment}= require("../controller/commentblog");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.put("/updatename/:username", updateName);
router.put("/updateEmailId/:username", updateEmailId);
router.put("/updateprofilepic/:username", updateProfilePic);
router.put("/updateAge/:username", updateAge);

router.get("/getuser/:username", getuser);

router.post("/createblog", createblog);
router.get("/getallblog", getallblog)
router.post("/likedblog", likedblog);
router.get("/getblog", getblog);

router.post("/createcomment", createcomment);


router.post("/savedblog", savedblog);

module.exports = router;