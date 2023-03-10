const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },

  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const imageUploader = multer({
  storage: storage,
}).single("image");

module.exports = imageUploader;
