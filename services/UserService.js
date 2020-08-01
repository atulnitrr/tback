const expressApp = require("../servers").expressApp;

expressApp.get("/health", (req, res, next) => {
  res.send("Hello health data");
});
