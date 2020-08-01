const express = require("express");

const expressApp = express();

expressApp.use(express.static("public"));

expressApp.listen("3033", () => {
  console.log("app is up at 3000");
});

module.exports = {
  expressApp,
};
