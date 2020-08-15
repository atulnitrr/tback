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

expressApp.post("/follow", (req, res) => {
  // TODO --> validation
  const { user_id, follower_id, following } = req.body;
  const filter = {
    user_id: user_id,
    follower_id: follower_id,
  };

  const data = {
    following: following,
    updated: Date.now(),
  };

  Follower.find(filter, (err, dbResult) => {
    if (err) {
      res.status(500).send({ status: "FAILURE", msg: "Could not save" });
    } else {
      console.log(dbResult);
      if (dbResult.length === 0) {
        const newFollower = new Follower();
        newFollower.user_id = user_id;
        newFollower.follower_id = follower_id;
        newFollower.following = following;
        newFollower.save((err, saveResult) => {
          if (err) {
            res
              .status(500)
              .send({ status: "FAILURE", msg: "Could not save -----" });
          } else {
            res.send({ status: "SUCCESS", data: saveResult });
          }
        });
      } else {
        Follower.updateOne(filter, data, (err, dbResult) => {
          if (err) {
            res
              .status(500)
              .send({
                status: "FAILURE",
                msg: "Could not update",
                err: JSON.stringify(err, null, 2),
              });
          } else {
            res.send({ status: "SUCCESS", data: dbResult });
          }
        });
      }
    }
  });
});

expressApp.post("/doifollow", (req, res) => {
  const { user_id, follower_id } = req.body;
  Follower.find(
    { user_id: user_id, follower_id: follower_id },
    (err, dbResult) => {
      if (err) {
        return res
          .status(500)
          .send({ status: "FAILURE", msg: JSON.stringify(err) });
      } else {
        return res.send(dbResult.length === 1 && dbResult[0].following);
      }
    }
  );
});
