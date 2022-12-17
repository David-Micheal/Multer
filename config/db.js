const mongoose = require("mongoose");

const mongodbURI = mongoose.connect("mongodb://localhost/Set06").then(() => {
  console.log("DataBase Connected");
});

module.exports = mongoose;
