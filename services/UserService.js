const expressApp = require("../servers").expressApp;

expressApp.get("/health", (req, res, next) => {
  console.log("Data");
});
