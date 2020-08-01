const expressApp = require("../servers").expressApp;

expressApp.get("/health", (req, res) => {
  res.send("Hello health data");
});

expressApp.post("/signUp", (req, res) => {
  res.send({ status: "Success", data: req.body });
});
