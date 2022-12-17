const mongoose = require("mongoose");

const ProfileShema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { timeStamps: true }
);

const Profile = mongoose.model("Profs", ProfileShema);

module.exports = Profile;
