const bcrypt = require("bcrypt");
const saltRounds = 10;
const expressApp = require("../servers").expressApp;

const User = require("../model/Users");

expressApp.get("/health", (req, res) => {
  res.send("Hello health data");
});

expressApp.post("/login", (req, res) => {
  const { email_id, password } = req.body;
  User.findOne({ email_id: email_id }, (err, dbUser) => {
    if (err) {
      console.log("ERROR");
      res.send({
        status: "FAILURE",
        data: { msg: "Error in login", err: JSON.stringify(err) },
      });
    } else {
      bcrypt.compare(password, dbUser.password, (err, result) => {
        if (err) {
          console.log(err);
          return res.send({
            status: "FAILURE",
            data: { msg: "Error in login", err: JSON.stringify(err) },
          });
        } else if (result) {
          console.log("SUCCESS");
          return res.send({
            status: "SUCCESS",
            data: {
              user_id: dbUser._id,
              email_id: dbUser.email_id,
              first_name: dbUser.first_name,
            },
          });
        } else {
          console.log("FAILURE");
          // FAILURE
          return res.send({
            status: "FAILURE",
            data: { msg: "Invalid credential" },
          });
        }
      });
    }
  });
});

expressApp.post("/signUp", (req, res) => {
  const { email_id, password, first_name, last_name } = req.body;
  // TODO validataion
  const user = new User();
  user.first_name = first_name;
  user.last_name = last_name;
  user.email_id = email_id;
  user.password = password;
  bcrypt
    .hash(password, saltRounds)
    .then((hash) => {
      user.password = hash;
      user.save((err, dbUser) => {
        if (err) {
          res.status(500).send({
            status: "FAILURE",
            data: { reason: JSON.stringify(err, null, 2) },
          });
        } else {
          res.send({
            status: "SUCCESS",
            data: {
              user_id: dbUser._id,
              email_id: dbUser.email_id,
            },
          });
        }
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        status: "Failure",
        data: { reason: JSON.stringify(err, null, 2) },
      });
    });
});
