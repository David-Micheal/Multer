const express = require("express");
const { newProfile, getProfile } = require("../controller/controller");
const upLoader = require("../config/multer");
const router = express.Router();

router.route("/profile/new").post(upLoader, newProfile);
router.route("/profile/").get(getProfile);

module.exports = router;
