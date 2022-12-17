const express = require("express");
const PORT = 2020;
const App = express();
const profileRout = require("./router/router");

require("./config/db");
App.use(express.json());

App.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is Up and Running🚀🚀🚀",
  });
});
App.use("/api", profileRout);
App.listen(PORT, () => {
  console.log(`Server On PORT: ${PORT}`);
});
