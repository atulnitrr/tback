const expressApp = require("../servers").expressApp;

const Follower = require("../model/Followers");

expressApp.get("/followers/:user_id", (req, res) => {
  const user_id = req.params.user_id;
  Follower.find({ user_id: user_id }, (err, dbResult) => {
    if (err) {
      return res
        .status(500)
        .send({ status: "FAILURE", msg: "Some error", err: err });
    } else {
      return res.send({ status: "SUCCESS", followers: dbResult });
    }
  });
});

expressApp.get("/followees/:user_id", (req, res) => {
  const user_id = req.params.user_id;
  Follower.find({ follower_id: user_id }, (err, dbResult) => {
    if (err) {
      return res
        .status(500)
        .send({ status: "FAILURE", msg: "Some error", err: err });
    } else {
      return res.send({ status: "SUCCESS", followes: dbResult });
    }
  });
});

expressApp.post("/addfollower", (req, res) => {
  // TODO --> validation
  const { user_id, follower_id } = req.body;
  const newFollower = new Follower();
  newFollower.user_id = user_id;
  newFollower.follower_id = follower_id;
  newFollower.save((err, dbResult) => {
    if (err) {
      res.status(500).send({ status: "FAILURE", msg: "Could not save" });
    } else {
      res.send({ status: "SUCCESS", data: dbResult });
    }
  });
});
