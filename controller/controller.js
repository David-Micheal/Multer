const modelProfile = require("../model/model");

const newProfile = async (req, res) => {
  try {
    const { name, bio } = req.body;
    const newFile = await modelProfile.create({
      name,
      bio,
      image: req.file.path,
    });
    res.status(201).json({
      massage: "Profile Created",
      data: newFile,
    });
  } catch (error) {
    res.status(400).json({
      massage: "An Error Occurred",
      data: error.message,
    });
  }
};

const getProfile = async (req, res) => {
  try {
    const getProf = await modelProfile.find();
    res.status(200).json({
      massage: "Profile Gotten Successfully",
      data: getProf,
    });
  } catch (error) {
    res.status(400).json({
      massage: "Failed",
      data: error.message,
    });
  }
};

module.exports = { newProfile, getProfile };
